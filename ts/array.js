// 两个元素换位子；
function swapArr(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
}
// 置顶移动
function toFirst(arr, index) {
    if (index != 0) {
        arr.unshift(arr.splice(index, 1)[0]);
    }
}
// up上移 一位, 如果已经是首位则不再执行
function upGo(arr, index) {
    if (index != 0) {
        arr[index] = arr.splice(index - 1, 1, arr[index])[0];
    }
    // 如有需要： arr.push(arr.shift()); 可将首位移至末尾
}
// down下移 一位， 若是末尾则不再执行
function downGo(arr, index) {
    if (index != arr.length - 1) {
        arr[index] = arr.splice(index + 1, 1, arr[index])[0];
    }
    // 如有需要： arr.unshift(arr.splice(index, 1)[0]); 可将末尾元素移至首位
}
var data = [
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
    }
];
console.log('初始值:', data);
toFirst(data, 2);
console.log('第一次移动:', data);
upGo(data, 2);
console.log('第二次移动:', data);
downGo(data, 1);
console.log('第三次移动:', data);
swapArr(data, 0, 1);
console.log('第四次移动:', data);
