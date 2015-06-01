function Frame(options ) {
  this.goCount = 0;
  console.log(options);
  this.startingPins = options.pins;
  this.standingPins = options.pins;
  this.maximumRolls = options.rolls;
  this.isLastFrame = options.isLastFrame;
}

Frame.prototype.registerGo = function(pinCount) {
  if(this.isOver()){throw("Frame is over")};
  this.goCount += 1;
  this.standingPins -= pinCount;
}

Frame.prototype.isAllPinsKnockedDown = function(){
 return this.standingPins === 0;
}

Frame.prototype.remainingPins = function() {
  return this.standingPins;
};

Frame.prototype.isOver = function() {
  return (this.goCount === this.maximumRolls || this.isAllPinsKnockedDown() );
};

Frame.prototype.total = function() {
  return this.startingPins - this.standingPins;
};

Frame.prototype.isStrike = function(){
  return (this.goCount === 1 && this.isAllPinsKnockedDown())
};

Frame.prototype.isSpare = function(){
  return (this.goCount === this.maximumRolls && this.isAllPinsKnockedDown())
};