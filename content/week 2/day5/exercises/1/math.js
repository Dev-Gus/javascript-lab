const add = (...nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
}

const multiply = (...nums) => {
    return nums.reduce((acc, num) => acc * num, 1);
}

export default { add, multiply };

/* 
WHEN TO USE DEFAULT VS NAMED EXPORTS?
| Use case                                 | Choose…             | Why                                         |
| ---------------------------------------- | ------------------- | ------------------------------------------- |
| Module has **one main thing**            | Default export      | Clean import, easy to rename                |
| Module has **several utility functions** | Named exports       | Explicit, flexible, tree-shakable           |
| Module has **one main thing + helpers**  | Mix default + named | Main function is default, helpers are named |
*/