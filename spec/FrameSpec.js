describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(2, 10);
  });

  it("registers a gutter ball", function() {
    frame.registerGo(0);
    expect(frame.remainingPins()).toEqual(10);
  });

  it("registers a successful roll", function() {
    frame.registerGo(5);
    expect(frame.remainingPins()).toEqual(5);
  });

  it("can register 2 rolls", function(){
    frame.registerGo(5);
    frame.registerGo(4);
    expect(frame.remainingPins()).toEqual(1);
  });

  describe('knows when it is over', function() {

    it("after two rolls", function() {
      frame.registerGo(1);
      frame.registerGo(1);
      expect(frame.isOver()).toEqual(true);
    });

    it("after all the pins have been knocked down", function(){
      frame.registerGo(10);
      expect(frame.isOver()).toEqual(true)
    });

  });

  it("knows when it is not over after less than two rolls", function(){
    expect(frame.isOver()).toEqual(false);
  });

  it("knows the total score", function(){
    frame.registerGo(3);
    frame.registerGo(3);
    expect(frame.total()).toEqual(6);
  });

  it("wont let a go be registered when i frame is over", function(){
    frame.registerGo(10);
    expect(function(){frame.registerGo(10)}).toThrow("Frame is over")
  });

  it("knows if there is a strike", function(){
    frame.registerGo(10);
    expect(frame.isStrike()).toEqual(true);
  });

  it("knows if there is not a strike", function(){
    frame.registerGo(6);
    expect(frame.isStrike()).toEqual(false);
  });

  it("knows if there is a spare", function(){
    frame.registerGo(9);
    frame.registerGo(1);
    expect(frame.isSpare()).toEqual(true);
  });

    it("knows if there is not a spare", function(){
    frame.registerGo(4);
    frame.registerGo(1);
    expect(frame.isSpare()).toEqual(false);
  });

});
