/*
* 类型注解
* TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。
* place: string
* */

function welcome(place: string) {
    return 'welcome to ' + place
}

console.log(welcome('北京'))

/*
* 接口
* 使用接口来描述一个拥有firstName和lastName字段的对象
* */

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);

/*
* 类
* 使用接口来描述一个拥有firstName和lastName字段的对象
* */

class Student {
    fullName: string;
    constructor(public firstName: any, public middleInitial: any, public lastName: any) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface People {
    firstName: string;
    lastName: string;
}

function print(person : People) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let info = new Student("Jane", "M.", "User");

console.log(print(info))

// 基本数据类型定义
// string, number, array
let flag : boolean = false
console.log(flag)
let str : string = 'i am best'
console.log(str)
let arr : string[] = ['1', '2', '3'] // let arr : Array<string> = ['1', '2', '3']
console.log(arr)
let num : number = 2
console.log(num)
let names: string = `Gene`;
let ages: number = 37;
let sentence: string = `Hello, my name is ${ names }.

I'll be ${ ages + 1 } years old next month.`;

console.log(sentence)

// 元组（Tuple） 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
// 当访问一个越界的元素，会使用联合类型替代

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
console.log(x)


// 枚举 enum类型是对JavaScript标准数据类型的一个补充。
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。

enum Color {Red = 1, Green = 6, Blue = 4}
let c: Color = Color.Green;

console.log(c)

let colorName: string = Color[4];

console.log(colorName)

// 类型断言 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。

let someValue: any = "this is a string";

// 第一种按照<>括号的形式
let strLength: number = (<string>someValue).length;

console.log(strLength)

// 第二种利用as语法
let secondValue: any = "this is second string";

let secondLength: number = (secondValue as string).length;

console.log(secondLength)

// 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。