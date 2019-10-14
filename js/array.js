function swapArr(arr, index1, index2) {
    let newArr = [].concat(arr.slice(0));
    newArr[index1] = newArr.splice(index2, 1, newArr[index1])[0];
    return newArr;
}
function toFirst(arr, index) {
    let newArr = [].concat(arr.slice(0));
    if (index !== 0) {
        newArr.unshift(newArr.splice(index, 1)[0]);
    }
    return newArr;
}
function upGo(arr, index) {
    let newArr = [].concat(arr.slice(0));
    if (index !== 0) {
        newArr[index] = newArr.splice(index - 1, 1, newArr[index])[0];
    }
    return newArr;
}
function downGo(arr, index) {
    let newArr = [].concat(arr.slice(0));
    if (index !== arr.length - 1) {
        newArr[index] = newArr.splice(index + 1, 1, newArr[index])[0];
    }
    return newArr;
}
function endGo(arr, index) {
    let newArr = [].concat(arr.slice(0));
    if (index !== arr.length - 1) {
        newArr.push(newArr.splice(index, 1)[0]);
    }
    return newArr;
}
let data = [
    {
        name: 'a',
        order: 1
    },
    {
        name: 'b',
        order: 2
    },
    {
        name: 'c',
        order: 3
    },
    {
        name: 'd',
        order: 4
    }
];
console.log('初始值:', data);
console.log('第一次移动:', toFirst(data, 2));
console.log('第二次移动:', upGo(data, 2));
console.log('第三次移动:', downGo(data, 1));
console.log('第四次移动:', swapArr(data, 0, 1));
console.log('元素移至末尾', endGo(data, 2));
let phone = '18856789866';
function dealPhoneNumber(phone) {
    return phone.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
}
console.log(dealPhoneNumber(phone));
let newData = data.map(item => (Object.assign({}, item)));
newData.forEach((item, i) => (Object.assign(Object.assign({}, item), { order: i + 3 })));
console.log(data);
console.log(endGo(newData, 2));
let newdata2 = [].concat(data.slice(0));
newdata2.forEach(item => {
    item.case = 10;
});
console.log(data);
console.log(newdata2);
let A = [0, 1, 2];
let B = [3, 4, 5];
let C = [6, 7, 8];
console.log(A.concat(B).concat(C));
