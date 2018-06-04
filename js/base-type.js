function welcome(place) {
    return 'welcome to ' + place;
}
console.log(welcome('北京'));
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function print(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var info = new Student("Jane", "M.", "User");
console.log(print(info));
var flag = false;
console.log(flag);
var str = 'i am best';
console.log(str);
var arr = ['1', '2', '3'];
console.log(arr);
var num = 2;
console.log(num);
var names = "Gene";
var ages = 37;
var sentence = "Hello, my name is " + names + ".\n\nI'll be " + (ages + 1) + " years old next month.";
console.log(sentence);
var x;
x = ['hello', 10];
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var colorName = Color[4];
console.log(colorName);
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var secondValue = "this is second string";
var secondLength = secondValue.length;
console.log(secondLength);
