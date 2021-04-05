//Factory is an object that manufacture other objects
//Factory allow you to create object in a centralised location
//No worries about const obj = new object() >> leads to clean code

//SCENARIO >
//Company has developers and testers - we are creating a Db to keep track of employees
//We will keep record of employees in a simple array

function Developer(name){
    this.name = name
    this.type = "Developer"
}

function Tester(name){
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name , type) => {
        switch(type){
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    }
}

function say(){
    console.log("Hi, I am " + this.name + " and I am " + this.type)
}

const employeeFactory  = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patric", 1))
employees.push(employeeFactory.create("John", 2))

employees.forEach( emp => {
    say.call(emp)
})