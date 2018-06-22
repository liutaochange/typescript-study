var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
var _a = [1, 2, 3, 4], one = _a[0], rest = _a.slice(1);
console.log(one);
console.log(rest);
var getdata = [5, 6, 7, 8][0];
console.log(getdata);
var _b = [9, 10, 11, 12], third = _b[2], fourth = _b[3];
console.log(third);
console.log(fourth);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
var passthrough = __rest(o, []);
var total = passthrough.b + passthrough.c.length;
console.log(passthrough);
console.log(total);
var newName1 = o.a, newName2 = o.b;
console.log(newName1);
console.log(newName2);
var _c = [][0], foo = _c === void 0 ? true : _c;
console.log(foo);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a);
    console.log(b);
}
keepWholeObject(o);
function f(_a) {
    var a = _a.a, b = _a.b;
    console.log(a);
    console.log(b);
}
f(o);
var arr1 = [1, 2];
var arr2 = [3, 4];
var bothPlus = [0].concat(arr1, arr2, [5]);
console.log(bothPlus);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.log(search);
var Col = (function () {
    function Col() {
        this.p = 12;
    }
    Col.prototype.m = function () {
    };
    return Col;
}());
var col = new Col();
var clone = __assign({}, col);
clone.p;
