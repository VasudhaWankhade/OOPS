// Object can be created by four ways

// 1) Object literal 

let myInfo = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    age: 22
}

// 2) function constructor ==> to set properties's values at the time of object creation

let Person = function(fN, lN, ag) {
    this.firstName = fN
    this.lastName = lN
    this.age = ag
}
let vasudha = new Person("Vasudha", "Wankhade", 22)
console.log(vasudha)

// 3) ES6 class 

class Girl {
    constructor(fN, lN, ag) {
        this.firstName = fN
        this.lastName = lN
        this.age = ag
    }
}

let sanju = new Girl("Sanjivani", "Dadhe", 22)
console.log(sanju)

// 4) Object.create method

let vasu = Object.create({ firstName: "Vasudha" })

class GrandFather {
    constructor(grandFatherName, lastName) {
        this.grandFatherName = grandFatherName
        this.lastName = lastName
    }

    displayName() {
        console.log(this.grandFatherName)
    }
}


// Inheritance

class Father extends GrandFather {
    constructor(fatherName, grandFatherName, lastName) {
        super(grandFatherName, lastName)
        this.fatherName = fatherName
    }

    displayName() {
        console.log(`${this.fatherName} ${this.grandFatherName} ${this.lastName}`)
        super.displayName()
    }
}

class Daughter extends Father {
    constructor(daughterName, fatherName, grandFatherName, lastName) {
        super(fatherName, grandFatherName, lastName)
        this.daughterName = daughterName
    }

    displayName() {
        console.log(`${this.daughterName} ${this.fatherName} ${this.lastName}`)
        super.displayName()
    }
}

let mamata = new Daughter("Mamata", "Dilip", "Deorao", "Wankhade")
console.log(mamata.daughterName)
mamata.displayName()

// Polymorphism ==> one method or functions many form

// overloading ==> same class same method different signature
// not possible in javascript

// overriding ==> different class same method same signature

class Calci {

    addition(x, y, z) {
        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        } else if (x != undefined && y != undefined) {
            console.log(x + y)
        } else if (x != undefined) {
            console.log("Can not perform addition")
        }
    }

}

let add = new Calci()
add.addition(10, 20, 30)
add.addition(10, 20)
add.addition(10)

function addition(x, y) {
    return function() {
        console.log(x + y)
    }
}
addition(x,y)()

// Encapsulation

// for Privacy

