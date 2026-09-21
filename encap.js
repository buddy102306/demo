class Student {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setAge(newAge) {
        this.#age = newAge;
    }

    getAge() {
        return this.#age;
    }
}

const student = new Student("Buddy", 19);

student.setAge(21);

console.log("Name:", student.getName());
console.log("Age:", student.getAge());