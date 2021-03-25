var COMM = (function () {
    let greet = "Hello";
    const getGreet = function () {
        let d = new Date();
        if (d.toLocaleTimeString().includes('AM')){
            greet = "Good Morning";
        } else {
            greet = "Hello";
        }
        return greet;
    }

    const greeting = function (name) {
        console.log(`${getGreet() + name}! Welcome.`);
    };

    //Public method and Properties
    return {
        greetUser: greeting
    };
})();

//COMM.greetUser



// An IIFE (Immediately Invoked Function Expression)
//  is a JavaScript function that runs as soon as
//   it is defined.

var result = (function () {
    var name = "John";
    return name;
})();

// // Immediately creates the output:
// result; // "John"