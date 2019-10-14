/* 变量基础类型 */

/* 布尔值 */
/* 最基本的数据类型就是简单的true/false值 */
// 类型注解
let isDone: boolean = false
if (!isDone) {
  console.log('i am boolean')
}

/* 数字 */
/* 和JavaScript一样，TypeScript里的所有数字都是浮点数,这些浮点数的类型是 number。  */
let numA: number = 6
let numB: number = 10
console.log(numA + numB)

/* 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。*/
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
console.log(binaryLiteral + octalLiteral)

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
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = { firstName: 'Jane', lastName: 'User' }

document.body.innerHTML = greeter(user)

// 基本数据类型定义
// string, number, array
let flag: boolean = false
console.log(flag)
let str: string = 'i am best'
console.log(str)
let arr: string[] = ['1', '2', '3'] // let arr : Array<string> = ['1', '2', '3']
console.log(arr)
let num: number = 2
console.log(num)
let names: string = `Gene`
let ages: number = 37
let sentence: string = `Hello, my name is ${names}.

I'll be ${ages + 1} years old next month.`

console.log(sentence)

// 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let newarr: number[] = [1, 2, 3]
console.log(newarr)
// 第二种方式是使用数组泛型，Array<元素类型>：
let secondArr: Array<number> = [1, 2, 3]
console.log(secondArr)

// 元组（Tuple） 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
// 当访问一个越界的元素，会使用联合类型替代
// Declare a tuple type
let x: [string, number]
// Initialize it
x = ['hello', 10] // OK
console.log(x)
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0])
// 当访问一个越界的元素，会使用联合类型替代：
// x[6] = 10 // 10 数字可以赋值给 number 类型
// x[7] = 'make' // make 字符串可以赋值给(string | number)类型
// console.log(x[5])
console.log(x)

// 枚举 enum类型是对JavaScript标准数据类型的一个补充。
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
enum Color {
  Red = 1,
  Green = 6,
  Blue = 4
}
let c: Color = Color.Green
console.log(c)
let colorName: string = Color[4]
console.log(colorName)

// Any any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean
console.log(notSure)
let list: any[] = [1, true, 'free']
list[1] = 100
console.log(list)

// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
  alert('This is my warning message')
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// Not much else we can assign to these variables!
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let u: undefined = undefined
let n: null = null

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
// 推断的返回值类型为never
function fail() {
  return error('Something failed')
}

// 类型断言 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let someValue: any = 'this is a string'

// 第一种按照<>括号的形式
let strLength: number = (<string>someValue).length

console.log(strLength)

// 第二种利用as语法
let secondValue: any = 'this is second string'

let secondLength: number = (secondValue as string).length

console.log(secondLength)
