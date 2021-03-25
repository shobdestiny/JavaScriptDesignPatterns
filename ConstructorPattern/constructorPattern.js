//Constructor Pattern

//OBJECT CREATION -> 3 WAYS

var newObject = {};
var newObject = Object.create(Object.prototype);
//"Object" constructor creates an object wrapper for a specific value
var newObject = new Object();

//Assigning key values -> 4 ways

//ECMA 3 compatible

// 1 - Dot syntax

//SET properties
newObject.someKey = "Some Value";

//GEt properties
var value = newObject.someKey;

//2. square bracket

//set properties
newObject["someKey"] = "Some value";

//Get Properties
var value = newObject["someKey"];

//3. Object.defineProperty

//Set properties
Object.defineProperty(newObject, "someKey",{
    value: "for more control of the property's behavior",
    writeable: true, // can modify their values
    //can update a property just assigning a new value to it.
    enumerable: true, // can access to all of them using a for..in loop
    //object are returned using Object.keys method
    configurable: true //can modify the behavior of the property
    //make them non-enumerable, non-writable or even non-cofigurable
});

/**************&&&&&&&&&&&&&************ */

// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function ( obj, key , value ){
    var config = {
        value : value,
        writeable : true,
        enumerable : true,
        configurable : true
    };
    Object.defineProperty ( obj, key, config );
};
//To use , we then create new empty "person" object
var person = Object.create( Object.prototype );

//Populate the object with properties
defineProp( person, "car", "Delorean " );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "harBeard", false );

console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

/**************&&&&&&&&&&&&&************ */

// 4. Object.defineProperties
 
// Set properties
Object.defineProperties( newObject, {
 
  "someKey": {
    value: "Hello World",
    writable: true
  },
 
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});
 
// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.


//USAGE:

//Create a race car driver that inherits from the person object
var driver = Object.create( person );

//Set some properties for the driver
defineProp( driver, "topSpeed", "100mhp" );
defineProp( driver, "age", "21" );

//Get an inherited property 
console.log( driver.topSpeed );
console.log( driver.age );