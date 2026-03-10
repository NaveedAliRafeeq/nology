// Creating a class in JavaScript

class Student {
    constructor(name, cohort, age) {
        this.name = name;
        this.cohort = cohort;
        this.age = age;
    }

    listDetails() {
        console.log(`Student Name: ${this.name}, Cohort: ${this.cohort}, Age: ${this.age}`);
    }
}

const ash = new Student("Ash", "March 26", 29);
const jeff = new Student("Jeff", "Feb 24", 34);

console.log(ash);

jeff.listDetails();