
module.exports = function (RED) {
	const summary = require("nodejs-text-summarizer");
	var SummaryTool = require('node-summary');
	function WriterSummary(config) {
		RED.nodes.createNode(this, config);
		this.text = config.text.toString();
		this.payloadTypeText = config.payloadTypeText;
		var node = this;

		const configuration = {
			n: 3,
			lang: 'EN',
			raw: false
		}
		// Retrieve the config node
		this.on("input", function (msg) {
			node.status({
				fill: "yellow",
				shape: "dot",
				text: "summarizing.."
			});

			if (this.payloadTypeSelector === "str") {
				try {
					msg.summary = summary(this.text, configuration);
					node.send(msg);
				  node.status({
						fill: "green",
						shape: "dot",
						text: "done"
					});
				} catch (err) {
					node.error(err);
					node.status({
						fill: "red",
						shape: "ring",
						text: "error: " + err.toString().substring(0, 10) + "..."
					});
				}
			} else {
				var text;
				RED.util.evaluateNodeProperty(
					this.text,
					this.payloadTypeText,
					this,
					msg,
					function (err, res) {
						if (err) {
							node.error(err.msg);
						} else {
							text = res;
						}
					}
				);
				try {
					msg.summary = summary(text, configuration);
					node.send(msg);
				  node.status({
						fill: "green",
						shape: "dot",
						text: "done"
					});
				} catch (err) {
					node.error(err);
					node.status({
						fill: "red",
						shape: "ring",
						text: "error: " + err.toString().substring(0, 10) + "..."
					});
				}
			}
		});
		oneditprepare: function oneditprepare() {
			$("#node-input-name").val(this.name);
		}
	}
	RED.nodes.registerType("maya-text-summary", WriterSummary);
};
