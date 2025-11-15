JavaScript Trick Patterns Cheat Sheet
1️⃣ Closures + var
function buildCounters() { ... }


var is function-scoped, not block-scoped

Closures capture the variable, not its value at creation

Result: all functions share the same i

Tip: Use let to get separate bindings per loop iteration

2️⃣ Destructuring traps
const { name: n, age: n } = obj;


const variables cannot be redeclared in the same scope

If a property is missing in deep destructuring: undefined

Use default values to prevent undefined:

const { info: { name = "default" } } = person;

3️⃣ Spread vs rest
arr = [...arr, 4];  // creates a new array, does NOT mutate original
function f(a, ...rest) {} // rest param collects remaining args


Spread (...arr) = expand elements (anywhere in expression)

Rest (...args) = collect remaining function arguments (must be last param)

4️⃣ Computed properties
const key = "name";
const user = { [key]: "Leo", key: "Sara" };


[key] evaluates the variable → property "name"

key: is a literal property → "key"

No shadowing; they are two separate keys

5️⃣ Template literals + logical operators
`${value > 5 && "big"}`


Inside ${}, any JS expression works

&& operator: returns first falsy or last truthy

"big" is returned only if value > 5 is truthy

Trick: true && "x" → "x" ; false && "x" → false

6️⃣ forEach vs map
const doubled = nums.forEach(n => n * 2); // returns undefined
const doubled = nums.map(n => n * 2);     // returns new array


map returns a new array of return values

forEach returns undefined; only useful for side effects

To modify original array with forEach, mutate it manually

7️⃣ Arrow function object ambiguity
const fn = () => { name: "John" };   // returns undefined
const fn = () => ({ name: "John" }); // returns object literal


{} in arrow function body = block, not object

Without return, block returns undefined

Use parentheses ({}) to return an object literal directly

8️⃣ Reduce pitfalls
arr.reduce((acc, n) => {
  if(n===2) return; // returns undefined → acc becomes undefined
  return acc + n;
}, 0);


reduce always uses callback return as new accumulator

Returning nothing → acc becomes undefined → can cause NaN in arithmetic

9️⃣ Callbacks
function run(a, b, cb) { cb(a+b); }


Callback may return something, but if caller ignores it, it’s lost

run(3,4,cb) → prints inside callback, but run returns undefined

Always check: does the caller use callback’s return value?

🔑 Extra mental models

JS operators can return non-boolean values (like &&, ||)

var vs let/const scope is crucial for closures

Arrow functions: {} block vs object literal

reduce and forEach are very different in return behavior

💡 Tip for studying:
Whenever you see code that looks simple but has multiple small details, break it down:

Identify scopes and closures

Check return values

Consider implicit behavior (undefined, type coercion)

Ask yourself: does the caller use the return value?



Tiny Visual One-Line Cheatsheet

var → function-scoped; let/const → block-scoped (closures capture the variable)

Destructuring missing prop → undefined; redeclaring same const → SyntaxError

Spread ...arr = copy/expand; Rest ...args = collect remaining args (must be last)

[key] = computed property; key: = literal property

${expr} in template literal evaluates any JS; && returns first falsy or last truthy

map → returns new array; forEach → returns undefined (side effects only)

Arrow {} = block body; ({}) = object literal; no return in block → undefined

reduce uses callback return as new acc; returning nothing → acc = undefined → NaN risk

Callback return ignored if caller doesn’t use it; side-effects only if function body does

Logical operators (&&, ||) can return non-boolean values (common trick)