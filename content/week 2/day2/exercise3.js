/* BROKEN CODE:
Your task:

Fix ALL the bugs so the code:
• correctly waits for the user
• correctly uses the required argument when fetching posts
• correctly logs the error inside the catch block */

async function loadData() {
    const user = await fetchUser();
    const posts = await fetchPosts(user);
    console.log("Posts:", posts)

    try {
        const comments = await fetchComments(posts[0]);
    } catch (error) {
        console.log("Something failed:", error);
    }

    console.log("Done!");
}

loadData();
