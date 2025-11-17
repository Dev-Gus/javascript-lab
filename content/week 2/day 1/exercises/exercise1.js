/* Exercise 1. Simulating fetch() with a Promise
Task:
Create a function called fakeFetch that:
accepts a url argument
returns a Promise
waits 1 second using setTimeout
after 1 second, it must randomly:
resolve with "Data from <url>"
OR reject with "Network error" 

Goal:
Call fakeFetch("https://api.test.com/user")
and handle the result using .then() and .catch(). */


function fakefetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const randomNum = Math.floor(Math.random() * 11);
            if (randomNum > 5) {
                resolve(`Data from ${url}`);
            } else {
                reject('Network Error')
            }
        }, 1000);
    });
}

fakefetch("https://api.test.com/user")
   .then(result => console.log(result))
   .catch(error => console.log(error));