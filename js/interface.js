function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function outLabel(labelledObj) {
    console.log(labelledObj.label);
}
let newObj = { size: 10, label: "Size 12 Object" };
outLabel(newObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
let arrays = [1, 2, 3, 4];
let ro = arrays;
console.log(ro);
let arrGet = ro;
console.log(arrGet);
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
console.log(mySearch('adcde', 's'));
console.log(mySearch('adcde', 'a'));
let newMySearch;
newMySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
console.log(newMySearch('adcde', 's'));
console.log(newMySearch('adcde', 'a'));
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
console.log(myStr);
let mynewArray = ["Alice", "Bob"];
class Clock {
    constructor(h, m) { }
    setTime(date) {
        this.currentTime = date;
    }
}
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 10;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () {
        console.log("test coo");
    };
    return counter;
}
let coo = getCounter();
coo(10);
coo.reset();
coo.interval = 5.0;
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
