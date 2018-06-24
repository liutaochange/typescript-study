// 类

class Greeters {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeters = new Greeters("world");
console.log(greeters.greet())

// 继承
class Animales {
  move(distanceInMeters: number = 0) {
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

// 复杂的继承
// 在构造函数里访问 this的属性之前，我们 一定要调用 super()
class AnimalEls {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class SnakeLs extends AnimalEls {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class HorseLs extends AnimalEls {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
}

let sam = new SnakeLs("Sammy the Python");
let tom: AnimalEls = new HorseLs("Tommy the Palomino");

sam.move();
tom.move(34);

// 公共，私有与受保护的修饰符

// 在TypeScript里，成员都默认为 public。

class AnimalPublic {
  public name: string;
  public constructor(theName: string) { this.name = theName; }
  public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// 当成员被标记成 private时，它就不能在声明它的类的外部访问。

class AnimalPrivate {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

// new AnimalPrivate("Cat").name; // 错误: 'name' 是私有的. Property 'name' is private and only accessible within class 'AnimalPrivate'.


// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
// 我们不能在 PersonClass类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 PersonClass派生而来的

class PersonClass {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends PersonClass {
  private department: string;

  constructor(name: string, department: string) {
      super(name)
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。

class PersonP {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class EmployeeP extends PersonP {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howardP = new EmployeeP("Howard", "Sales");
// let john = new PersonP("John"); // 错误: 'PersonP' 的构造函数是被保护的.