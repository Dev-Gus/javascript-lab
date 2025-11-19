/* Exercise 3 — Chaining Promises

Create three functions, each returning a Promise:

1) getUser()
waits 500ms
resolves with: { id: 1, name: "Alice" }

2) getPosts(user)
waits 800ms
resolves with:
[`Post 1 from ${user.name}`, `Post 2 from ${user.name}`]

3) getComments(post)
waits 400ms
resolves with:
[`Comment on ${post}`]

Task:

• Chain them like this:
• Call getUser()
• Then pass the user to getPosts()
• Then take the first post and send it to getComments()

Log the final result */

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 500);
    });
}

function getPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user) {
                resolve([`Post 1 from ${user.name}`, `Post 2 from ${user.name}`]);
            } else {
                reject(new Error("User not found"));
            }
        }, 800);
    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (post) {
                resolve([`Comment on ${post}`]);
            } else {
                reject(new Error("Post not found"));
            }
        }, 400);
    });
}

getUser()
    .then(user => getPosts(user))
    .then(posts => getComments(posts[0]))
    .then(result => console.log(result))
    .catch(error => console.log(error));