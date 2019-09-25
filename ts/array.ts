// 两个元素换位子；
function swapArr(arr: Array<object>, index1: number, index2: number) {
    let newArr = [].concat(arr.slice(0));
    newArr[index1] = newArr.splice(index2, 1, newArr[index1])[0];
    return newArr;
}

// 置顶移动
function toFirst(arr: Array<object>, index: number,) {
    let newArr = [].concat(arr.slice(0));
    if (index !== 0) {
        newArr.unshift(newArr.splice(index, 1)[0]);
    }
    return newArr;
}

// up上移 一位, 如果已经是首位则不再执行
function upGo(arr: Array<object>, index: number) {
    let newArr = [].concat(arr.slice(0));
    if (index !== 0) {
        newArr[index] = newArr.splice(index - 1, 1, newArr[index])[0];
    }
    return newArr;
    // 如有需要： arr.push(arr.shift()); 可将首位移至末尾
}

// down下移 一位， 若是末尾则不再执行
function downGo(arr: Array<object>, index: number) {
    let newArr = [].concat(arr.slice(0));
    if (index !== arr.length - 1) {
        newArr[index] = newArr.splice(index + 1, 1, newArr[index])[0];
    }
    return newArr;
    // 如有需要： arr.unshift(arr.splice(index, 1)[0]); 可将末尾元素移至首位
}

let data: Array<object> = [
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

let phone : string = '18856789866';
function dealPhoneNumber(phone: string) {
    return phone.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
}
console.log(dealPhoneNumber(phone)); // 188****9866