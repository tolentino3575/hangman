function Game() {
  this.gameWord = "";
  this.splitSave = [];
  this.putLines = [];
  this.guess = guess;
};

Game.prototype.wordUse = function() {
  var words = ["code", "cool", "easy"];
    console.log(words);
  var randomWord= words[Math.floor(Math.random() * words.length)];
  this.gameWord = randomWord;
  };

Game.prototype.splitWord = function() {
  var string = this.gameWord;
  var result = string.split("");
  this.splitSave = result;
};

Game.prototype.makeBlank = function() {
  var letters = splitResult;
  var underscore = letters.splice(0, -1, '_');
  this.putLines = underscore;
};

Game.prototype.guess = function() {
  if (this.splitSave.indexOf(X)){

  }
}
