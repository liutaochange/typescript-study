var message = 10;
function f() {
    var message = 'Hello, world!';
    return message;
}
console.log(f());
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
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
function letFoo(input) {
    var a = 100;
    if (input) {
        var b_1 = a + 1;
        return b_1;
    }
    return b;
}
console.log(letFoo(false));
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]));
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var getcity = theCityThatAlwaysSleeps();
console.log(getcity);
