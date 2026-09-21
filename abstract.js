class Car {
    drive() {
        throw new Error("Method must be implemented");
    }
}

class Sedan extends Car {
    drive() {
        this.#startEngine();
        this.#moveWheels();
    }

    #startEngine() {
        console.log("Engine started.");
    }

    #moveWheels() {
        console.log("Wheels moving.");
    }
}

const car = new Sedan();
car.drive();