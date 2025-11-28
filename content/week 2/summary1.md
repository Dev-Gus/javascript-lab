ASYNC / AWAIT + ERROR HANDLING — MASTER SUMMARY

1. Await only works inside async functions
async function f() {
  await something
}

If the function isn't async → await breaks.


2. fetch() returns a Promise, not a Response.


3. Rejections go to catch → unless you catch them early

If you reject inside a try, it goes to that catch:
try {
  await Promise.reject("X")
} catch(e) {
  console.log(e)
}


4. If catch handles the error and RETURNS something → the Promise RESOLVES

async function f() {
  try {
    await Promise.reject("X")
  } catch(e) {
    return 123
  }
}

f().then(console.log) // prints 123 ✔️

Why?
Because catch returned a value, so the promise is considered resolved.


5. If catch re-throws → the Promise REJECTS
async function f() {
  try {
    await Promise.reject("X")
  } catch(e) {
    throw "NEW"
  }
}

f().catch(console.log) // prints NEW ✔️

The catch didn’t “fix” the problem — it threw a new one.


6. Hierarchy of async flows
📌 Inside async function:

throw → goes to internal catch

await Promise.reject() → also goes to internal catch

📌 After catch:

If you return → ✔️ resolves

If you return something → ✔️ resolves with that value

If you throw → ❌ rejects


7. Then/catch still follow the same rules

Even when using async/await inside the function.

async function x() { return 10 }
x().then(console.log) // 10

async function x() { throw "error" }
x().catch(console.log) // error


8. Try/catch around await replaces .catch()

These are equivalent:

try {
  await something()
} catch(e) {
  console.log(e)
}


Same as:

something().catch(e => console.log(e))


9. Microtasks BEFORE macrotasks

Order of execution:

Synchronous code

Microtasks → .then(), catch(), finally()

Macrotasks → setTimeout, setInterval


