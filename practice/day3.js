// KNOWLEDGE TEST //
//#1 Object manipulation
const player = {
    name: "Leo",
    level: 10,
    stats: { strength: 8, agility: 7 },
};

player.experience = 1500;
player.level++;
delete player.stats.agility;

function runSolution1() {
    for (let key in player) {
        console.log(key, player[key]);
    };
}


//#2 Destructuring
const country = {
    name: "Uruguay",
    population: 3500000,
    details: { capital: "Montevideo", language: "Spanish" }
};


const {name: countryName, details: {capital, language}} = country;
function runSolution2() {
    console.log(`${countryName}'s capital is ${capital} and people speak ${language}`);
}


//#3 Arrays & methods

const prices = [10, 20, 30, 40];

const total = prices
    .map(price => price * 1.2)
    .filter(price => price > 25)
    .reduce((sum, price) => sum + price, 0);

function runSolution3() {
    console.log(`Total price: ${total}`);
}


// #4 Spread & Rest
function registerUser(name, email, ...hobbies) {
    return {
        name: name,
        email: email,
        hobbies: [...hobbies],
    }
}

const user = registerUser("Gus", "example@gmail.com", "coding", "MMA", "cooking");
const user2 = {...user, isAdmin: true};


//#5 Deep vs Shallow
const original = {
    data: {value: 100}
};

const shallowCopy = {...original};
const deepCopy = structuredClone(original);

shallowCopy.data.value = 200;
console.log(original, shallowCopy, deepCopy);