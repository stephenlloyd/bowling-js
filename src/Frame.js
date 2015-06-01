function Frame() {
  this.goCount = 2;
  this.standingPins = 10;
}

Frame.prototype.registerGo = function(pinCount) {
  this.goCount -= 1;
  this.standingPins -= pinCount;
}

Frame.prototype.remainingPins = function() {
  return this.standingPins;
};

Frame.prototype.isOver = function() {
  return (this.goCount === 0);
};

