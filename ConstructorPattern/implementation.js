// 1 creating object and adding attributes
var defineProp = function ( obj, key, value)
{
    var config = {
        value: value,
        enumerable: true,
        configurable: true
    }
    Object.defineProperty( obj, key, config )
}

var employee = Object.create( Object.prototype );

defineProp ( employee, "name" , "Shobhit" );
defineProp ( employee, "age", 20  );
defineProp ( employee, "post", "Intern" );

console.log( employee );







//2 Constructor with prototypes

function employee( model, years, miles ) {
    this.name = name;
    this.age = age;
    this.post = post;

    // this.toString = function () {
    //     return this.name + " is " + this.age + " years" + " old";  
    // };

    employee.prototype.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}

var emp1 = new employee( "Shobhit", 20, "intern");
var emp2 = new employee( "Abhi" , 20, "intern");

console.log( emp1.toString() );
console.log( emp2.toString() );