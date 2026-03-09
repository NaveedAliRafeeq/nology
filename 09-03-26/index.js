
const myAge = 25;

let name = "Nav";

// Don't use var
var jobRole = "Software Engineer";

//is was are; all naming conventions
isAdmin = false;

console.log(myAge + jobRole + isAdmin);

const addTwoNumbers = (num1, num2) => {
    if (typeof num1 === 'string') {
        return "this function expects 2 numbers as arguments, but received a string instead.";
    }
    return `num1 + num2`;
}
// Don't use function keyword to declare functions, use arrow functions instead
function createFullName(firstName, lastName) {
    return `firstname: ${firstName} lastname: ${lastName}`;
}



console.log(addTwoNumbers(5, 10));
console.log(createFullName("Nav", "Rafeeq"));