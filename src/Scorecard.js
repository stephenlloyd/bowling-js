function Scorecard() {
  this.frames = [];
 }

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

Scorecard.prototype.total = function() {
  var runningTotal = 0;
  for(var i = 0; i < this.frames.length; i ++) {
    if (this.frames[i].isSpare() && !this.frames[i].isLastFrame){
      try{runningTotal += this.frames[i + 1].total();} catch(err){};
    };

    if (this.frames[i].isStrike() && !this.frames[i].isLastFrame ){
      try{runningTotal += this.frames[i + 1].total();} catch(err){};
      try{runningTotal += this.frames[i + 2].total();} catch(err){};
    };
    runningTotal += this.frames[i].total();
    };
  return runningTotal;
};