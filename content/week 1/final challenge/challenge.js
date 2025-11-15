function getRandomNum() {
    return Math.floor(Math.random() * 10000) + 1;
}

function createUser(name, age) {
    const userId = getRandomNum(); 
    return {
        name,
        age,
        info() {
            const {name, age} = this;
            return `User: ${name} | Age: ${age}`;
        },
        [`id-${userId}`]: userId,
    };
}

function handleListUpdate(updatedList) {
    console.log(`List updated: ${updatedList}`);
}

function addUser(user, list, cb) {
    list.push(user);

    cb(list);
}

function getAdults(list) {
    return list.filter(({age}) => age >= 18);
}

function summarize(list) {
    const total = list.length;
    const adults = getAdults(list).length;

    return [
        `Total users: ${total}`,
        `Adults: ${adults}`
    ].join('\n');
}