// Ways to create object

// Object literal

let a = {
    myName: "Vasudha",
    myLastName: "Wankhade",
    myAge: 22
}
console.log(a)

//By using function constructor

let Student = function(fN, lN, ag, rN) {
    this.firstName = fN
    this.laastNma = lN
    this.age = ag
    this.rollNo = rN
        // this.display = function() {
        //     console.log(this.firstName + this.laastNma)
        // }
}

let vasudha = new Student("Vasudha", "Wankhade", 22, 25)
console.log(vasudha)

//Here

console.log(vasudha.__proto__ == Student.prototype)

// If we create more than one object display method is repeated 

// so we add this repeatating code in Parent's prototype i.e. Student's prototype

Student.prototype.display = function() {
    console.log(this.firstName + this.laastNma)
}

// Objects inherit peoperties and methods from its parent's prototype

console.log(vasudha instanceof(Student))
    // console.log(vasudha.hasOwnProperty(display))
console.log(vasudha.hasOwnProperty('firstName'))

// ES6 class

class Person {
    constructor(fN, lN, age) {
        this.firstName = fN
        this.lastName = lN
        this.aage = age
    }
    display() { // When we write methods outside the constructor it get add into class prototype
        console.log(this.firstName)
    }
}

let mamata = new Person("Mamta", "Wankhade", 50)
console.log(mamata)
mamata.display()

//We also write it as

let PersonOne = class {
    constructor(name) {
        this.name = name
    }
}

// By using Object.create() method

let PersonTwo = Object.create({})