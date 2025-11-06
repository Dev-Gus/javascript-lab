Functions, Scope & Closures

1. Function Types:

Declaration
 function sayHi() {}
Hoisted with their entire definition - Can be called before it's defined.

Expression
 const sayHi = function() {};
Hoisted only by their name, not their value. let / const are in TDZ

Arrow Function
 const sayHi = () => {}
Shorter syntax, no own this or arguments.


2. Hoisting & TDZ
• var is hoisted & initialized as undefined.
• let / const are hoisted but not initialized => TDZ (Temporal Dead Zone).

console.log(a); // undefined
console.log(b); // ReferenceError
var a = 1;
let b = 2;


3. this & arguments

•Normal function: new this, has arguments
•Arrow function: inherits outer this, no arguments

const obj = {
    x: 10,
    f() { console.log(this.x); },
    g: () => console.log(this.x),
};

obj.f(); // 10
obj.g(); // undefined


4. Lexical Scope 
•Scope is determined where code is written, not where it's called.

let a = 'global';
function outer(){
    let a = 'outer';
    function inner(){ console.log(a) } 
    inner(); // 'outer'
}

outer();


5. Closures
A closure = a function + the environment it was created in.

function makeCounter() {
    let count = 0;
    return () => ++count;
}

const c = makeCounter();
c(); // 1 
c(); // 2

Keeps access to count even after makeCounter finishes.


6. Closure Gotcha (with var)

function build() {
    let arr = [];
    for (var i=0; i<3; i++) arr.push(() => console.log(i));
    return arr;
}

build()[0](); // 3 (not 0!)

fix: 

for (let i = 0; i<3; i++) arr.push(() => console.log(i));




7. Higher-Order Functions (HOFs)
•Functions that take or return other functions.

function map(arr, fn) {
    return arr-map(fn);
}
map([1, 2, 3], x => x*2); // [2, 4, 6]

example: once
function once(fn) {
    let done = false, result;
    return (...args) => !done ? (done = true, result = fn(...args)) : result;
}




8. IIFE
Inmediately Invoked Function Expression
•Creates a private scope instantly

(function(){
    const msg = "Private";
    console.log(msg);
})();



9. Common Patterns
Pattern	                  Purpose
Closure	               Keep private data
Factory Function	Create configured functions
IIFE	                Temporary scope
HOF	                  Functional composition
Arrow Function	   Short functions, lexical this


10. Best Practices
•Prefer let / const
•Use arrow functions for callbacks. but not for objects methods
•Use closures intentionally
•Don't overuse globals
•Use once or memoize for optimization patterns