describe('wordUse', function() {
  it("will provide a word for the game", function(){
    var testGame = new Game();
    testGame.wordUse();
    expect(testGame.gameWord).to.equal("code" || "easy" || "cool");
  });
});

describe('Game', function() {
  it("splits word into individual letters", function(){
    var testGame = new Game ();
    testGame.wordUse();
    testGame.splitWord();
    expect(testGame.splitSave).to.eql[("B", "a", "l", "l")];
  });

  it("will change individual letters into '_'", function(){
    var testGame = new Game ("B", "a", "l", "l");
    expect(testGame.makeBlank).to.eql[("_", "_", "_", "_")];
  });

  it("will check the guessed letter against each letter in the array", function() {
    var testGame = new Game ();
    expect(testGame.guess).to.equal
  });
});
