const obj = {
    x: 10,
    getX: function () { return this.x; },
    getXArrow: () => this.x
}; 

console.log(obj.getX()); // 10
console.log(obj.getXArrow()); // undefined