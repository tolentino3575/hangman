function Word(newWord, splitWord) {
  this.newWord = newWord;
  this.splitWord = splitWord;
};

Word.prototype.wordUse = function() {
  var words = ["code", "cool", "easy"];
    return words[Math.floor(Math.random() * words.length)];
    console.log(words)
    var word = words();
  };

Word.prototype.splitWord = function() {
  var string = word;
  var result = string.split("");
    return result;
};






// function Count(wordCount) {
//   this.wordCount = wordCount;
// }
