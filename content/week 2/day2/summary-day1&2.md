DAY 1 & 2 — SUMMARY: Promises & Error Handling || async/await
🔹 1. What is a Promise?

A Promise is an object representing an async operation that will finish in the future.

It has 3 states:

pending → still working

fulfilled → completed successfully

rejected → failed

A Promise guarantees that:

It resolves once,

It never switches state again,

It gives you a clean way to handle async results.

🔹 2. Creating a Promise
const p = new Promise((resolve, reject) => {
    // async work here
});


You call:

resolve(value) when things go well

reject(error) when something goes wrong

🔹 3. Consuming a Promise (then/catch)
promise
  .then(result => { ... })
  .catch(error => { ... })
  .finally(() => { ... });


then → when the promise resolves

catch → when the promise rejects

finally → always runs (like “cleanup”)

🔹 4. Async/Await (cleaner syntax)

Async/await is just a nicer way to work with promises.

try {
    const data = await fetchData();
} catch (err) {
    console.error(err);
}


await pauses inside the function until the Promise settles.

🔹 5. Sequential vs Parallel Async
Sequential (one after another)

Use when:

operations depend on each other

order matters

const a = await step1();
const b = await step2(a);

Parallel (run multiple at same time)

Use when:

operations are independent

you want the fastest result

const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
]);

🔹 6. Error Handling
Using try/catch (async/await)
try {
    await something();
} catch (err) {
    console.log("Error:", err);
}

Using throw

You throw when you want to intentionally reject:

if (!isValid) throw new Error("Invalid data");


Concept: throw inside async functions becomes a promise rejection automatically.

🔹 7. Handling multiple errors (Promise.all)

If any promise fails → the whole Promise.all rejects.

try {
    await Promise.all([p1, p2, p3]);
} catch (err) {
    console.error("One failed:", err);
}


(Optional tool:)
Promise.allSettled returns results even if some fail.

🔹 8. Key Mental Models

These are the ones you must “feel” intuitively:

Promises = async containers

async/await = cleaner way to work with them

try/catch = async error handling

throw = manually trigger an error

sequential = dependency → slower but necessary

parallel = independence → fastest