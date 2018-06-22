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