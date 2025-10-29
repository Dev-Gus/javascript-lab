// Create a function scopeMaster() that does the following:
// Tries to log a, b, and c before they are declared.

// Declares them using var, let, and const.

// Inside a block (if (true) { ... }), redeclare a, b, and c with new values.

// Logs their values inside and outside the block.

// Mutates a property of const c if it’s an object.

function scopeMaster() {
    try {
        console.log(a);
        console.log(b);
        console.log(c);
    } catch (error) {
        console.log("Error: Must declare the variables before using them")
    }


    var a = 1;
    let b = 2;
    const c = { name: "gus", };

    if (true) {
        var a = 2;
        let b = 4;
        const c = {age: 24};
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);

    c.name = "gustaviño";
    console.log("After mutation:", c);

}

scopeMaster();