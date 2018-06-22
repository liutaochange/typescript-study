var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function outLabel(labelledObj) {
    console.log(labelledObj.label);
}
var newObj = { size: 10, label: "Size 12 Object" };
outLabel(newObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var arrays = [1, 2, 3, 4];
var ro = arrays;
console.log(ro);
var arrGet = ro;
console.log(arrGet);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('adcde', 's'));
console.log(mySearch('adcde', 'a'));
var newMySearch;
newMySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(newMySearch('adcde', 's'));
console.log(newMySearch('adcde', 'a'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var mynewArray = ["Alice", "Bob"];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 10;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () {
        console.log("test coo");
    };
    return counter;
}
var coo = getCounter();
coo(10);
coo.reset();
coo.interval = 5.0;
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
