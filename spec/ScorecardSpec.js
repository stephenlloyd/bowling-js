describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can take a frame", function(){
    scorecard.addFrame({});
    expect(scorecard.frames).toEqual([{}]);
  });

  it("can calculate a total of a series of frames", function(){
    scorecard.addFrame({total : function(){ return 3}, isSpare : function(){return false}, isStrike : function(){return false}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 3}, isSpare : function(){return false}, isStrike : function(){return false}, isLastFrame : false})
    expect(scorecard.total()).toEqual(6);
  })

  it("can calculate the total if the first go is a spare", function(){
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return true}, isStrike : function(){return false}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 1}, isSpare : function(){return false}, isStrike : function(){return false}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 1}, isSpare : function(){return false}, isStrike : function(){return false}, isLastFrame : false })
    expect(scorecard.total()).toEqual(13);
  })

  it("can calculate the total if the first go is a stike", function(){
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 1}, isSpare : function(){return false}, isStrike : function(){return false}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 1}, isSpare : function(){return false}, isStrike : function(){return false}, isLastFrame : false })
    expect(scorecard.total()).toEqual(14);
  });

  it('can calculate all 12 strikes frames in bowling to 300', function(){
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : false })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : true })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : true })
    scorecard.addFrame({total : function(){ return 10}, isSpare : function(){return false}, isStrike : function(){return true}, isLastFrame : true })
    expect(scorecard.total()).toEqual(300);

  })


});
