//We can create object by four ways


//1) Object literal
//2) Function constructor
//3) ES6 class
//4) Object.create method

// class ==> we define class to create object

//Oops provides:

// Encapsulation
// Inheritaance
// Polymorphism
// Abstraction


// Inheritance ==> Child can access the parameters, properties and methods of parents

// Parent with constructor and child without constructor

class Child {
    constructor(fN, lN) {
        this.firstName = fN
        this.lastName = lN
    }
}

class Young extends Child {
    standard = 10
}

let vasudha = new Young("Vasudha", "Wankhade") // We have to pass parameters for parent constructor
console.log(vasudha)
console.log(vasudha.standard)

// Parent and Child with constructor

class Baby {
    constructor(fN, lN) {
        this.firstName = fN
        this.lastName = lN
    }
}

class Girl extends Baby {
    constructor(fN, lN, clas) {
        super(fN, lN) // to call parent constructor
        this.class = clas
    }
}

let mamata = new Girl("Mamata", "Wankhade", 12)
console.log(mamata)