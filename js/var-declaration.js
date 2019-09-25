var message = 10;
function fzz() {
    var message = 'Hello, world!';
    return message;
}
console.log(fzz());
function goo() {
    var a = 10;
    return function () {
        var b = a + 1;
        return b;
    };
}
var g = goo();
console.log(g());
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
function letFoo(input) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }
    return b;
}
console.log(letFoo(false));
function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]));
function theCityThatAlwaysSleeps() {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        };
    }
    return getCity();
}
let getcity = theCityThatAlwaysSleeps();
console.log(getcity);
