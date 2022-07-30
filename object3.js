class Grandfather {
    constructor(grandFatherName, lastName) {
        this.grandFatherName = grandFatherName
        this.lastName = lastName
    }

    displayName() {
        console.log(this.grandFatherName)
    }
}

class Father extends Grandfather {
    constructor(fatherName, grandFatherName, lastName) {
        super(grandFatherName, lastName)
        this.fatherName = fatherName
    }
    displayName() {
        super.displayName()
        console.log(this.fatherName)
    }
}

class Daughter extends Father {
    constructor(daughterName, fatherName, grandFatherName, lastName) {
        super(fatherName, grandFatherName, lastName)
        this.daughterName = daughterName
    }
    displayName() {
        super.displayName()
        console.log(this.daughterName) // commands written outside the constructor are added in object's prortotype

    }
}

let vasudha = new Daughter("Vasudha", "Dilip", "Deorao", "Wankhade")
console.log(vasudha)
vasudha.displayName()