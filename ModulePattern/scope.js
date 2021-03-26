// GLobal scope
//method / variables

function A(){

    // outer scope 
    // method/variables

    function B(){

        //inner scope
        //method / variables

    }
}


//ObjectLitral

var a = {
    key1 : "this is a value",
    key2 : function(){

    }
}

// An IIFE (Immediately Invoked Function Expression)
//  is a JavaScript function that runs as soon as
//   it is defined.

var result = (function () {
    var name = "John";
    return name;
})();

// // Immediately creates the output:
// result; // "John"
