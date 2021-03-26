var COMM = (function () {

    //Private

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