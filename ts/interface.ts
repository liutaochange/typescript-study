//  在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
//  定义参数里必须有label这个参数，并且类型为string

// 类型检测
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // Size 10 Object

// 传入的对象满足上面提到的必要条件，那么它就是被允许的。
interface LabelledValue {
    label: string;
}

function outLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let newObj = {size: 10, label: "Size 12 Object"};
outLabel(newObj); // // Size 12 Object

// 可选属性
// 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

interface SquareConfig {
    color?: string;
    width?: number;
}
// 可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare) // {color: "black", area: 100}

// 只读属性
// 可以在属性名前用 readonly来指定只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // annot redeclare block-scoped variable 'x'

// 数组只读

let arrays: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arrays;
console.log(ro) //  [1, 2, 3, 4]

// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error! 算把整个ReadonlyArray赋值到一个普通数组也是不可以的。

// 可以用类型断言重写

let arrGet = ro as number[];
console.log(arrGet) //  [1, 2, 3, 4]

// 判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。


// 函数类型
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
console.log(mySearch('adcde','s'))  // false
console.log(mySearch('adcde','a'))  // true

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。

let newMySearch: SearchFunc;
newMySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}
console.log(newMySearch('adcde','s'))  // false
console.log(newMySearch('adcde','a'))  // true

// 可索引的类型
// 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)

// 支持两种索引签名：字符串和数字, 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。

// 可以将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let mynewArray: ReadonlyStringArray = ["Alice", "Bob"];
// mynewArray[2] = "Mallory"; // error!

// 类类型

// 实现接口
// 接口描述了类的公共部分，而不是公共和私有两部分
interface ClockInterface {
    currentTime: Date;
    // setTime(date: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(date: Date) {
        this.currentTime = date;
    }
    constructor(h: number, m: number) { }
}

// 类静态部分与实例部分的区别
// 操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型
// 继承接口
// 和类一样，接口也可以相互继承
// 一个接口可以继承多个接口，创建出多个接口的合成接口。

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 10;

// 混合类型
// 接口能够描述JavaScript里丰富的类型。

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () {
        console.log("test coo")
    };
    return counter;
}

let coo = getCounter();
coo(10);
coo.reset();
coo.interval = 5.0;

// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 接口同样会继承到类的private和protected成员

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }

// class Location {

// }

// SelectableControl包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。