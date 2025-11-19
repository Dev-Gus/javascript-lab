/*
API CHALLENGE #1 — “The Three Requests”

You must:

Fetch a user from:
https://jsonplaceholder.typicode.com/users/1

Then fetch all that user’s posts from:
https://jsonplaceholder.typicode.com/posts?userId=1

Then fetch all comments from the first post returned:
https://jsonplaceholder.typicode.com/comments?postId=FIRST_POST_ID

Handle ALL errors —
network errors
HTTP errors
missing data
empty post list
missing comments

Log EXACTLY this information in this order:

User name + email
Number of posts the user has
The title of the first post
Number of comments on that post

If anything fails at any point, show a descriptive error message.

🎯 Requirements (non-optional)
✔ Use async/await
✔ Check response.ok for each request
✔ Clean and readable code — no spaghetti
✔ Meaningful error messages
✔ Throw errors when something unexpected happens
✔ No fixed indices unless you check they exist

• Hints (but only if you need them)

You’ll have three sequential awaits
Each step depends on the previous one
Think of it like “waterfall async logic”
Break the code into small clear steps

Validate EVERYTHING before moving forward
*/

async function inspectUserdata() {
}

inspectUserdata();