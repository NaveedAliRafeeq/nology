/*
Goal: Write a program that simulates a day in the life of a virtual pet! You will set up the rules for how your pet behaves, and then run a sequence of events to see what happens.
Requirements:
Set up your pet's stats: Create variables for petName, energy, hunger, and happiness. Give them starting number values (e.g., 50). Note: For hunger, a higher number means they are more hungry!
Create your action functions:
feed(): Should decrease hunger and increase energy.Rule: Use an if/else statement to check if hunger is already less than 10. If it is, console.log that the pet refuses to eat!
play(): Should increase happiness and hunger, but decrease energy.Rule: Use an if/else statement to check if energy is less than 20. If it is, console.log that the pet is too tired to play.
sleep(): Should greatly increase energy and slightly increase hunger.
checkStatus(): Should console.log all of the pet's current stats so you can read them.
Simulate the Day: * At the very bottom of your code, call your functions in whatever order you want to create a story for the day. (e.g., check stats, feed, play, play again, sleep, check stats).
Open your terminal and run your program!
*/

pet = {
    petName: "Fluffy",
    energy: 50,
    hunger: 50,
    happiness: 50
};

const feed = () => {
    if (pet.hunger < 10) {
        console.log(`${pet.petName} refuses to eat!`);
    }
    else {
        pet.hunger -= 20;
        pet.energy += 10;
    }
}
const play = () => {
    if (pet.energy < 20) {
        console.log(`${pet.petName} is too tired to play!`);
    }
    else {
        pet.happiness += 20;
        pet.hunger += 10;
        pet.energy -= 20;
    }
}

const sleep = () => {
    pet.energy += 30;
    pet.hunger += 10;
}

const checkStatus = () => {
    console.log(`petname: ${pet.petName}`);
    console.log(`energy: ${pet.energy}`);
    console.log(`hunger: ${pet.hunger}`);
    console.log(`happiness: ${pet.happiness}`);

}

checkStatus();
feed();
play();
sleep();
checkStatus();
play();
play();
play();
play();
checkStatus();
sleep();
sleep();
sleep();
checkStatus();
feed();
feed();
feed();
feed();
feed();
feed();
feed();
feed();
checkStatus();