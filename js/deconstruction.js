var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);
let [one, ...rest] = [1, 2, 3, 4];
console.log(one);
console.log(rest);
let [getdata] = [5, 6, 7, 8];
console.log(getdata);
let [, , third, fourth] = [9, 10, 11, 12];
console.log(third);
console.log(fourth);
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a);
console.log(b);
let passthrough = __rest(o, []);
let total = passthrough.b + passthrough.c.length;
console.log(passthrough);
console.log(total);
let { a: newName1, b: newName2 } = o;
console.log(newName1);
console.log(newName2);
let [foo = true] = [];
console.log(foo);
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
    console.log(a);
    console.log(b);
}
keepWholeObject(o);
function fdd({ a, b }) {
    console.log(a);
    console.log(b);
}
fdd(o);
let arr1 = [1, 2];
let arr2 = [3, 4];
let bothPlus = [0, ...arr1, ...arr2, 5];
console.log(bothPlus);
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = Object.assign(Object.assign({}, defaults), { food: "rich" });
console.log(search);
class Col {
    constructor() {
        this.p = 12;
    }
    m() {
    }
}
let col = new Col();
let clone = Object.assign({}, col);
clone.p;
