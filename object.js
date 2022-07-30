// First method to create object ==> object literal

let info = {
    myName: "Vasudha",
    myLastName: "Wankhade",
    myAge: 22,
    myRollNo: 30,
    display: function() {
        console.log(this.myName + this.myLastName)
    }
}

// Second method to create object ==> function constructor

let Student = function(fN, lN, age, rN) {
    this.myName = fN
    this.myLastName = lN
    this.myAge = age
    this.myRollNo = rN
        // this.display = function() {
        //     console.log(this.myName + this.myLastName)
        // }
}

let vasudha = new Student("Vasudha", "Wankhade", 22, 23)
console.log(vasudha)

// properties can be updated and added and deleted outside 

// vasudha.myCity = "Amravati"
// console.log(vasudha)

// delete vasudha.myAge
// console.log(vasudha)

// vasudha.myRollNo = 50
// console.log(vasudha)


// =============================================================================================================================================


//every object has property ==> __proto__ which is similar to its parents prototype

// console.log(vasudha.__proto__ === Student.prototype)

//In every object of Student type the display method is repeated 
//Hence to avoid this we add display method to the prototype of Student

// Student.prototype.display = function() {
//     console.log(this.myName + this.myLastName)
// }

let sanju = new Student("Sanjivani", "Dadhe", 22, 30)
console.log(sanju)
console.log(vasudha)

// sanju.display()

// let mamta = new Student("Mamta", "Wankhade", 30, 39)
// console.log(mamta)

// let newStudents = [vasudha, sanju, mamta]
//     // add city= "Amravati" to each student

// newStudents.forEach(function(el) {
//     el.game = "Cricket"
// })

// console.log(vasudha, sanju, mamta)