function Word(newWord) {
  this.newWord = newWord;
};

Word.prototype.wordUse = function (){
  var words = ["code", "cool", "easy"];
    return words[Math.floor(Math.random() * words.length)];
    console.log(words)
  };

function Split(wordSplit) {
  this.wordSplit = wordSplit;
}

// Split.prototype.wordSplit = function (){
// };




// function Count(wordCount) {
//   this.wordCount = wordCount;
// }
