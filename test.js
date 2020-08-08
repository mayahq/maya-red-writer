var summarizer = require('nodejs-text-summarizer')

var text2 = 
`
If you haven’t seen it already, trailer of Charlie Kaufman’s newest Netflix film, I’m Thinking of Ending Things is here and boy, oh boy is it intriguing. That’s right; The Academy winning writer/director of Eternal Sunshine Of The Spotless Mind fame has gone ahead and done it again and how! The end of afore-mentioned sentences are abstract cause that’s exactly what Kaufman is dishing in this genre-twisting tale which begins like a harmless, romcom only to give drop your jaws with existentialism. That and warped theories of time of how we are stationary and it is time that passes through us!
Like I said, the promo begins with Jessie Buckley’s character and her boyfriend Jake--played by Jesse Plemons--taking a trip to his parents’ for the first meet. While that is that, she is having second thoughts and is conflicted about ending things with him. Harmless, right? No. The official synopsis reads, “Trapped at the farm during a snowstorm with Jake’s mother (Toni Collette) and father (David Thewlis), the young woman begins to question the nature of everything she knew or understood about her boyfriend, herself, and the world and doesn’t even cover the weird thing she comes across." Including the picture of baby Jake which is she convinced is not him, but her! In a true-blue thriller fashion, the woman experiences all sorts of psychological episodes and I can’t wait to decode them all.
With a blizzard outside and chaos inside, the film which is based on Iain Reid’s acclaimed novel of the same name, lives upto Kaufman’s reputation of noir cinema. I’m Thinking of Ending Things starts streaming on Netflix on September 4. And I don’t know about you but I can’t wait!'''
`
var opt = {
  n:3,
  lang:'ID',
  raw:false
}
var result2 = summarizer(text2, opt);
console.log(result2);