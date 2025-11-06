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

• map() => transforms elements/execute a function for each element
• filter() => keeps only those that match a condition
• reduce() => accumulates values

example: 
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