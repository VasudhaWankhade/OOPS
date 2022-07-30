// Polymorphism ==> one thing many forms

class Calculate {

    add(x, y, z) {
        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        } else if (x != undefined && y != undefined) {
            console.log(x + y)
        } else if (x != undefined) {
            console.log("Can not add single number")
        }
    }
}

let a = new Calculate()
a.add(10)
a.add(10, 10)
a.add(10, 10, 10)

// above is example of same method giving different output

// same class same method different signature ==>Overloading 

// Overloading is not possible in javascript
// // different class same method name same signature - overriding --- inheritance

class WorldBank {
    fixedDeposit(amount) {
        console.log(`The rate of interest is : ${amount*2}`)
    }
    loan(amount) {
        console.log(`The rate of interest is : ${amount*10}`)
    }
}

class BOI extends WorldBank {
    fixedDeposit(amount) {
        console.log(`The rate of interest is : ${amount*1.5}`)
    }
    loan(amount) {
        console.log(`The rate of interest for loan is: ${amount*20}`)
    }
}

let vasudha = new BOI()
vasudha.fixedDeposit(10000, 2)
vasudha.loan(20000, 30);


// Encapsulation is important for privacy

//IIFE ==> Immediate invoke function expression
// old method to call function ==> privacy

(function() {
    console.log(20 + 10)
})()

// Object create ways ==> Object literal    function constructor    ES6 class   Object.create() method