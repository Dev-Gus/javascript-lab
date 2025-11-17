/* EXERCISE 2 — Manual Error Simulation

Create a function called getUserData that returns a Promise.
Inside it:

Wait 500ms with setTimeout.
Create a random boolean (true/false).
If true → resolve with an object:
{ id: 1, name: "John" }
If false → reject with a new Error:
new Error("User not found")

Then call the function and handle the output with .then() and .catch(). */

function getUserData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const randomBool = Math.random() > 0.5;

            if(randomBool) {
                res({id: 1, name: "John Pork"});
            } else {
                rej(new Error("User not found"));
            }
        }, 500);
    });
}

getUserData()
   .then(result => console.log(result))
   .catch(error => console.log(error));