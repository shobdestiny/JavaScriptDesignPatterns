// Mixins - collecting functionality through extension
// Promote function re-use.
// Mixins allow objects to borrow functionality from other objects
// Way of doing multiple inheritence

var myMixins = {
 
  moveUp: function(){
    console.log( "move up" );
  },
 
  moveDown: function(){
    console.log( "move down" );
  },
 
  stop: function(){
    console.log( "stop! in the name of love!" );
  }
 
};
// Extend the prototype of existing constructor functions using Underscore.js _.extend() method:
// A skeleton carAnimator constructor
function CarAnimator(){
  this.moveLeft = function(){
    console.log( "move left" );
  };
}
 
// A skeleton personAnimator constructor
function PersonAnimator(){
  this.moveRandomly = function(){ /*..*/ };
}
 
// Extend both constructors with our Mixin
_.extend( CarAnimator.prototype, myMixins );
_.extend( PersonAnimator.prototype, myMixins );
 
// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();
 
// Outputs:
// move left
// move down
// stop! 

/******************************ADVANTAGES AND DISADVANTAGES**********************************/
// Mixins assist in decreasing functional repetition and increasing function re-use in a system.
// Injecting functionality into an object prototype is a bad idea as it leads to both prototype pollution and a level of uncertainty.
// If care is taken during implementation it would be fine