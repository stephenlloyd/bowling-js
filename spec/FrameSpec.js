describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("can register a go", function() {
    frame.registerGo(0);
    expect(frame.remainingPins()).toEqual(10);
  });

});
