console.log(a);
var a = 10;

console.log(b);
let b = 20;

function test() {
    var x = 1;
    let y = 2;
    if (true) {
        var x = 3;
        let y = 4;
        console.log('inside block:', x, y);
    }
    console.log('outside block:', x, y);
}
