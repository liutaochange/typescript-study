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
let phone = '18856789866';
function dealPhoneNumber(phone) {
    return phone.replace(/^(\d{3})\d{4}(\d+)/, "$1****$2");
}
console.log(dealPhoneNumber(phone));
