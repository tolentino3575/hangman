var words = ["code", "cool", "easy"];

describe('Word', function() {
  it("will provide a word for the game", function(){
    var testWord = new Word ("Ball");
    expect(words.includes(testWord.newWord)).to.equal(false);
  });

  it("will provide a word from an array to use", function(){
    var testWord = new Word ("Ball", "cool");
    expect(words.includes(testWord.wordUse())).to.equal(true);
  });

  it("splits word into individual letters", function(){
    var testWord = new Word ("Ball");
    expect(testWord.splitWord).to.eql[("B", "a", "l", "l")];
  });

});






// describe('Count', function(){
//   it("count the number of individual letters", function(){
//     var testCount = new Count ("B", "a", "l", "l")
//     expect(testCount.wordCount).to.equal(4);
//   });

    // it("counts number of individual letters", function(){
    //
    //
    // });
