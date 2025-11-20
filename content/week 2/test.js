const car = {
  brand: "Toyota",
  model: "Corolla",
  fullName() {
    return `${this.brand} ${this.model}`;
  },
  delayedLog() {
    console.log("1:", this.fullName());

    setTimeout(() => {
      console.log("2:", this.fullName());
    }, 500);

    const obj = {
      brand: "Fake",
      model: "Car",
      callIt: this.fullName,
    };

    console.log("3:", obj.callIt());
  }
};

car.delayedLog();
