describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
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

  it("knows when it is over after two rolls", function() {
    frame.registerGo(1);
    frame.registerGo(1);
    expect(frame.isOver()).toEqual(true);
  });

  it("knows when it is not over after less than two rolls", function(){
    expect(frame.isOver()).toEqual(false);
  })
});
