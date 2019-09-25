class Greeters {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeters = new Greeters("world");
console.log(greeters.greet());
class Animales {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Doges extends Animales {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Doges();
dog.bark();
dog.move(10);
dog.bark();
class AnimalEls {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class SnakeLs extends AnimalEls {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class HorseLs extends AnimalEls {
    constructor(name) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new SnakeLs("Sammy the Python");
let tom = new HorseLs("Tommy the Palomino");
sam.move();
tom.move(34);
class AnimalPublic {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class AnimalPrivate {
    constructor(theName) { this.name = theName; }
}
class PersonClass {
    constructor(name) { this.name = name; }
}
class Employee extends PersonClass {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
class PersonP {
    constructor(theName) { this.name = theName; }
}
class EmployeeP extends PersonP {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howardP = new EmployeeP("Howard", "Sales");
