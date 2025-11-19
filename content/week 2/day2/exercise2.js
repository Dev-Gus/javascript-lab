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

async function runSequential() {
    try {
        const user = await mockFetch('api/user');
        const posts = await mockFetch('api/posts');
        const comments = await mockFetch('api/comments');

        console.log([user, posts, comments]);
    } catch (error) {
        console.error('ERROR:', error);
    }
}

async function runParallel() {
    try {
        const parallelResults = await Promise.all([
            mockFetch('api/user'),
            mockFetch('api/posts'),
            mockFetch('api/comments')
        ]);

        console.log(parallelResults);
    } catch (error) {
        console.error('ERROR:', error);
    }
}