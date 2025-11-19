async function fakeFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 11);

            if(randomNum > 5) {
                resolve(`Data from ${url}`);
            } else {
                reject('Network Error');
            }
        }, 1000);
    });
}

async function run() {
    try {
        const data = await fakeFetch('https://api.test.com/user');
        console.log(data);
    } catch (error) {
        console.error("ERROR:", error);
    }
}

run();