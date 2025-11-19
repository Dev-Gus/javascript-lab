///// FETCH /////
// GET METHOD
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/9999');
        if (!response.ok) {
            throw new Error(`User not found! Status: ${response.status}`);
        }
        const user = await response.json();
        console.log(user.name, user.email);
    } catch (error) {
        console.error('Error:', error);
    }
}


// POST METHOD 
async function createUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Gus Dev",
                username: "sinCompilar",
                email: "gus@example.com",
            })
        });

        if(!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function inspectUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if(!response.ok) {
            throw new Error(`User not found. Status: ${response.status}`);
        }

        console.log('Status:', response.status);
        console.log('OK:', response.ok);
        console.log('Headers:', response.headers.get('Content-Type'));

        const data = await response.json();
        console.log(data.name, data.email);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if(!response.ok) {
            throw new Error(`HTTP Error. status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Status: ${response.status}`, `OK: ${response.ok}`);
        console.log(data.title);
    } catch (error) {
        console.error('Network/CORS error:', error.message);
        throw error;
    }
}

fetchTodo();