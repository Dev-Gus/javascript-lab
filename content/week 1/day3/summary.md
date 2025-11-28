///// SUMMARY | OBJECT & ARRAY MASTERY /////
1. // Objects basics

• Objects store data in key-value pairs:
const user = {name: "Gus", age: 25};

• Access:
  • Dot notation => user.name
  • Bracket notation => user["name"]

• Add/update => user.country = "Uruguay"
• Delete => delete user.age;
• Loop through =>
for (let key in user) console.log(key, user[key]);


2. // Destructuring Objects

• Extract multiple properties easily:
const { name, age } = user;

• Nested destructuring:
const user = { info: { email: "gus@example.com" } };
const {info: {email} } = user;

• Default values
const { role = "guest" } = user;


3. // Arrays & Useful Methods

• map : transforms elements/execute a function for each element and return a new array. Does not modify the original one.
•forEach : executes a function to each element. Doesn't return a new array.
• filter : keeps only those that match a condition
• reduce : accumulates values
• find : Return the first element that matches a specific given condition or undefined if no element matches the condition.
• some: Check if at least one element of the array matches the given condition. returns true or false;
• every: Check if every element matches the given condition. returns true or false.
• sort: Order the elements of an array in their place, according to a comparison function.
• slice: Creates a new array with a copy of a part of the original array, without modifying the original one.
• splice: Allows to add or remove elements in a specific position from the original array.

example of some of them: 
const prices = [10, 20, 30, 40];
const total = prices
   .map(p => p * 1.2)
   .filter(p => p > 20)
   .reduce((sum, p) => sum + p, 0);


4. // Spread & Rest operators

• Spread (...) : Expands arrays or objects
const newArr = [...arr];
const newObj = { ...obj, extra: true };

• Rest (...) : Collects remaining arguments
function registerUser(name, ...hobbies) {
    console.log(hobbies); // array with the arguments passed to the rest parameter
}


5. // Deep vs Shallow copies

• Shallow copy: one level deep => nested objects share references
const copy = {...original}; // original & copy shares the same reference

• Deep copy: full independent clone
const deep = structuredClone(original); 


// Bonus concepts //

• Destructuring with arrays:
const [first, , third] = ["a", "b", "c"];

• Combine everything:
const {name, stats: {strength} } = player;
const [price1, ...rest] = prices;