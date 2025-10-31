////////// Rewrite a small module using closures (e.g., a counter with increment/decrement/reset).

// function createCounter() {
//     let count = 0;

//     return {
//         increment() { count++; return count;},
//         decrement() { count--; return count;},
//         reset() { count = 0; return count;},
//     }
// }

// const count = createCounter();

// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.reset());



////////// Convert a set of functions from function to arrow syntax and check this behavior.

// const student = {
//     name: "Alice", 
//     greet: function(){
//         console.log(`Hello, my name is ${this.name}`) ;
//     },

//     arrowGreet: () => console.log(`Hello, my name is ${this.name}`),
// }

// student.greet();
// student.arrowGreet();



////////// Build a small memoize(fn) higher-order function.

function memoize(fn) { //Define higher-order function that takes a func as input
    const cache = {}; // create a closure where previous results will be stored

    return function (...args) { //Return new function that collect all arguments into an array args
        let key = JSON.stringify(args); //create an unique key representing the arguments

        if (key in cache) { //if that input has been seen before, instantly return the cached result- no recomputation
            return cache[key];
        } else { //otherwise, compute the result by calling original func:
            let result = fn.call(this, ...args);
            cache[key] = result; // store it in cache so it'll be remembered
            return result; // return it 
        }
    }
}


// Example — Function with multiple arguments
// const add = memoize((a, b) => {
//   console.log("Adding...");
//   return a + b;
// });
// console.log(add(2, 3)); // "Adding..." then 5
// console.log(add(2, 3)); // "Returning from cache..." then 5
// console.log(add(3, 2)); // "Adding..." (different key, "[3,2]") then 5


// Example 2 — Expensive computation simulation
// const slowSquare = memoize(n => {
//   console.log("Computing square...");
//   for (let i = 0; i < 1e8; i++) {} // fake delay
//   return n * n;
// });

// console.time("first");
// console.log(slowSquare(9));
// console.timeEnd("first");

// console.time("second");
// console.log(slowSquare(9));
// console.timeEnd("second"); // should be MUCH faster!



////////// Find 3 examples in your day where lexical scope saved you from passing data around.
// ejemplo con código
const heladera = {
    almuerzo: null,
    cena: 'pizza del dia anterior'
};

function horaDecomer(comida) {
    if (!heladera[comida]) {
        cocinar(comida);
    }

    return heladera[comida];
}

function cocinar(comida) {
    heladera[comida] = 'fideo con salsiña';
}

////// siguiente ejemplo

function crearConsciencia() {
    let tiempoEnPantalla = 0; // variable privada gracias al lexical scope 

    return function consciencia(minutosDeUso) {
        tiempoEnPantalla += minutosDeUso;

        if (tiempoEnPantalla > 180) {
            return 'Deja el celular, andá a laburar';
        } else {
            return `Llevas ${tiempoUsadoHoy} minutos, ya viene siendo hora de laburar no?`;
        }
    };
}

const consciencia = crearConsciencia();


//// ejemplo 3

function pomodoro() {
    let descanso = false;

    function estudiar() {
        console.log('Estudiando durante 50 minutos...');
        setTimeout(() => {
            descanso = true;
            tomarAgua();
        }, 50 * 60 * 1000);
    }

    function tomarAgua() {
        if (descanso) {
            console.log('Hora de tomar agüiña');
        }
    }

    estudiar();
}