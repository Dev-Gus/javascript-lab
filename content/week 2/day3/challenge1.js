/* API CHALLENGE #1 — “The Three Requests” */


async function inspectUserdata() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) throw new Error(`User not found (status ${response.status})`);
        const user = await response.json();

        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        if (!postsResponse.ok) throw new Error(`Posts not found (status ${postsResponse.status})`);
        const posts = await postsResponse.json();

        if (posts.length === 0) throw new Error("User has no posts, cannot fetch comments");

        const firstPost = posts[0];

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
        if (!commentsResponse.ok) throw new Error(`Comments not found (status ${commentsResponse.status})`);
        const comments = await commentsResponse.json();

        console.log(`User name: ${user.name}`);
        console.log(`User email: ${user.email}`);
        console.log(`Number of user posts: ${posts.length}`);
        console.log(`First post title: ${firstPost.title}`);
        console.log(`Comments in the post: ${comments.length}`);
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

inspectUserdata();