Day 1 – JavaScript Foundations

Topics: Execution Context • Call Stack • Hoisting • Scope

⚙️ Execution Context & Call Stack

Execution Context = environment where code runs (variables, functions, scope).

Call Stack = order of execution (Last In, First Out).


🚀 Hoisting

JS runs in 2 phases:
1. Creation – JS reads the whole code and search for variables/functions and hoist them.
2. Execution – code runs line by line.

• var => hoisted & initialized as undefined
•let/const => hoisted but not initialized => TDZ (Temporal Dead Zone)

Example:
console.log(a); // undefined
console.log(b); // ReferenceError
var a = 10;
let b = 20;


🌍 Scope
• Global - outside any function/block
• Function - var visible through the whole function
• Block - let & const limited to {...}

Example:

if (true) {
    var x = 1;
    let y = 2;
}
console.log(x); // 1
console.log(y); // ReferenceError


🧩 Key Insight

• var => function-scoped, overriden inside blocks.
• let => block-scoped, inner variable doesn't affect outer one.
• const => can't be reassigned, but object properties can mutate.


💡 Takeaways
• Always declare variables before use.
• Prefer let and const; avoid var.
• Understand hoisting = foundation of JS logic.
• JS always runs in creation => execution phases.
• Call Stack ensures correct function order.