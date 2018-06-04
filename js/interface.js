function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function outLabel(labelledObj) {
    console.log(labelledObj.label);
}
var newObj = { size: 10, label: "Size 10 Object" };
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
