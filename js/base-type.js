let isDone = false;
if (!isDone) {
    console.log('i am boolean');
}
let numA = 6;
let numB = 10;
console.log(numA + numB);
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
console.log(binaryLiteral + octalLiteral);
function welcome(place) {
    return 'welcome to ' + place;
}
console.log(welcome('北京'));
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
let user = { firstName: 'Jane', lastName: 'User' };
document.body.innerHTML = greeter(user);
let flag = false;
console.log(flag);
let str = 'i am best';
console.log(str);
let arr = ['1', '2', '3'];
console.log(arr);
let num = 2;
console.log(num);
let names = `Gene`;
let ages = 37;
let sentence = `Hello, my name is ${names}.

I'll be ${ages + 1} years old next month.`;
console.log(sentence);
let newarr = [1, 2, 3];
console.log(newarr);
let secondArr = [1, 2, 3];
console.log(secondArr);
let x;
x = ['hello', 10];
console.log(x);
console.log(x[0]);
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
let colorName = Color[4];
console.log(colorName);
let notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
console.log(notSure);
let list = [1, true, 'free'];
list[1] = 100;
console.log(list);
function warnUser() {
    alert('This is my warning message');
}
let unusable = undefined;
let u = undefined;
let n = null;
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
function fail() {
    return error('Something failed');
}
let someValue = 'this is a string';
let strLength = someValue.length;
console.log(strLength);
let secondValue = 'this is second string';
let secondLength = secondValue.length;
console.log(secondLength);
