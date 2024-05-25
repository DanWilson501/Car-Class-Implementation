// U5223-1368
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
    accelerate() {
        this.speed += 10;
        console.log(`The ${this.make} is now going at ${this.speed} km/h.`);
    }

    brake() {
        this.speed -= 5;
        console.log(`The ${this.make}, is now going at ${this.speed}, km/h.`);
    }
}
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

//In console, enter car1.accelerate(); or car1.brake(); in order to test the car data provided and view calculations.