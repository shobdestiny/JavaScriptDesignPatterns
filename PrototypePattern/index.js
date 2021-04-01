//AddyOsmani

//Prototype Pattern
//creates objects based on a template of an existing object through cloning
//prototype object used as a blueprint for each object the constructor creates
//Pattern based on prototypal inheritance where objects which act as prototypes for other objects.
//Prototype pattern is an easy way to implement inheritance
//can also boost performance as well

//Example
var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};
 
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
 
// Now we can see that one is a prototype of the other
console.log( yourCar.name );

//"Object.create" also allows us to easily implement advanced 
//concepts such as differential inheritance 
//where objects are able to directly inherit from other objects

/**************************************************************************/

//PROPERTIES using the SECOND supplied argument using an object literal 
//similar to  "Object.defineProperties and Object.defineProperty"

var vehicle = {
    getModel: function () {
      console.log( "The model of this vehicle is.." + this.model );
    }
  };
   
  var car = Object.create(vehicle, {
   
    "id": {
      value: MY_GLOBAL.nextId(),
      // writable:false, configurable:false by default
      enumerable: true
    },
   
    "model": {
      value: "Ford",
      enumerable: true
    }

});

/**************************************************************************/
//OBJECT WITHOUT USING object.create
var vehiclePrototype = {
 
  init: function ( carModel ) {
    this.model = carModel;
  },
 
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};
 
 
function vehicle( model ) {
 
  function F() {};
  F.prototype = vehiclePrototype;
 
  var f = new F();
 
  f.init( model );
  return f;
 
}
 
var car = vehicle( "Ford Escort" );
car.getModel();
//THIS alternative does not allow the user to define read-only properties

/**************************************************************************/

//FINAL ALTERNATIVE
// var beget = (function () {
 
//     function F() {}
 
//     return function ( proto ) {
//         F.prototype = proto;
//         return new F();
//     };
// })();