
module.exports = function (RED) {
	const summary = require("nodejs-text-summarizer");
	function WriterSummary(config) {
		RED.nodes.createNode(this, config);
		this.text = config.text;
		this.payloadTypeText = config.payloadTypeText;
		var node = this;

		const configuration = {
			n: 3,
			lang: 'EN',
			raw: true
		}
		// Retrieve the config node
		this.on("input", function (msg) {
			node.status({
				fill: "yellow",
				shape: "dot",
				text: "clicking: " + this.selector.toString().substring(0, 10) + "..."
			});

			if (this.payloadTypeSelector === "str") {
				try {
					msg.summary = summary.summarize(this.text, configuration);
					node.send(msg);
				  node.status({
						fill: "green",
						shape: "dot",
						text: "ready"
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
					msg.summary = summary.summarize(text, configuration);
					node.send(msg);
				  node.status({
						fill: "green",
						shape: "dot",
						text: "ready"
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
