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
var Greeters = (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    Greeters.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeters;
}());
var greeters = new Greeters("world");
console.log(greeters.greet());
var Animales = (function () {
    function Animales() {
    }
    Animales.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animales;
}());
var Doges = (function (_super) {
    __extends(Doges, _super);
    function Doges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doges.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Doges;
}(Animales));
var dog = new Doges();
dog.bark();
dog.move(10);
dog.bark();
var AnimalEls = (function () {
    function AnimalEls(theName) {
        this.name = theName;
    }
    AnimalEls.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalEls;
}());
var SnakeLs = (function (_super) {
    __extends(SnakeLs, _super);
    function SnakeLs(name) {
        return _super.call(this, name) || this;
    }
    SnakeLs.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return SnakeLs;
}(AnimalEls));
var HorseLs = (function (_super) {
    __extends(HorseLs, _super);
    function HorseLs(name) {
        return _super.call(this, name) || this;
    }
    HorseLs.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return HorseLs;
}(AnimalEls));
var sam = new SnakeLs("Sammy the Python");
var tom = new HorseLs("Tommy the Palomino");
sam.move();
tom.move(34);
var AnimalPublic = (function () {
    function AnimalPublic(theName) {
        this.name = theName;
    }
    AnimalPublic.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalPublic;
}());
var AnimalPrivate = (function () {
    function AnimalPrivate(theName) {
        this.name = theName;
    }
    return AnimalPrivate;
}());
