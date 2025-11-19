/* Simple Data Fetcher (Mock API with Promises)

Build a small simulation of an API system.
The idea is to practice:

Promises
Chaining
Error handling
Parallel requests (Promise.all)

PROJECT REQUIREMENTS
1. Create a function mockFetch(url)
Returns a Promise
Waits a random time between 300–1200ms
If url starts with "api/" → resolve with:
{ data: `Response from ${url}` }

Otherwise → reject with:
new Error("Invalid URL")

2. Create three API calls:

mockFetch("api/user")
mockFetch("api/posts")
mockFetch("api/comments")

3. Fetch them in three ways:
A) Sequential (one after another)

fetch user
then posts
then comments

Log the final collected results.

B) Parallel with Promise.all()

Fetch user + posts + comments at the same time.
Log the array of results.

C) Error scenario

Try calling:
mockFetch("wrong-endpoint")


Handle the error with .catch().

Rules:

Write the code from scratch.
Don’t switch to async/await yet — we do that later.
No hints until you try */

function mockFetch(url) {
    return new Promise((resolve, reject) => {
        const randomTime = Math.random() * (1200 - 300) + 300;

        setTimeout(() => {
            const validateUrl = url.startsWith("api/");
            if (validateUrl) {
                resolve({ data: `Response from ${url}` });
            } else {
                reject(new Error("Invalid URL"));
            }
        }, randomTime);
    });
}

const results = [];

mockFetch("api/user")
    .then(result => {
        results.push(result);
        return mockFetch("api/posts");
    })
    .then(result => {
        results.push(result)
        return mockFetch("api/comments");
    })
    .then(result => {
        results.push(result);
        console.log(results);
    })
    .catch(error => console.log(error));



Promise.all([mockFetch("api/user"), mockFetch("api/posts"), mockFetch("api/comments")]).then((results) => {
    console.log(results);
}).catch(error => console.log(error));

mockFetch("wrong-endpoint")
    .then(result => console.log(`This result ${result} will never appear`))
    .catch(error => console.log(error));