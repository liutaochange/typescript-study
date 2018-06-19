// 变量声明 var
var message = 10;
function f () {
    var message = 'Hello, world!'
    return message
}
console.log(f())

function goo() {
    var a = 10;
    // 此处返回一个闭包，用来可以在外部使用goo内部的变量a
    return function () {
        var b = a + 1;
        return b;
    }
}
var g = goo();
console.log(g())

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
// 变量声明 let
// 当用let声明一个变量，它使用的是词法作用域或块作用域，并且let声明的变量不可重复赋值
function letFoo(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    return b;
}
console.log(letFoo(false))
// 在一个嵌套作用域里引入一个新名字的行为称做屏蔽
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1,2,3,4,5],[6,7,8,9,10]]))
// 块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }
    return getCity();
}
let getcity = theCityThatAlwaysSleeps()
console.log(getcity)
// 解构数组
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a)
console.log(b)

// 默认值
// 默认值生效的条件是，对象的属性值严格等于undefined。
// 如果解构失败，变量的值等于undefined。
let [foo = true] = [];
console.log(foo)

// let [x, y = 'b'] = ['a'];
// console.log(x,y)
