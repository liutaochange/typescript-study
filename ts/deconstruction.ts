// 解构数组
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a)
console.log(b)

// 默认值
// 默认值生效的条件是，对象的属性值严格等于undefined。
// 如果解构失败，变量的值等于undefined。
let [foo = true] = [];
console.log(foo)

// let [x, y = 'b'] = ['a'];
// console.log(x,y)
