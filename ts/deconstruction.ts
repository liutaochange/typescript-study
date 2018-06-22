// 解构数组
let input = [1, 2];
let [first, second] = input;
console.log(first);  // 1
console.log(second); // 2

// 在数组里使用拓展运算符 ...语法创建剩余变量
let [one, ...rest] = [1, 2, 3, 4];
console.log(one);  //  1
console.log(rest); //  [ 2, 3, 4 ]

// 忽略不需要的因素
let [getdata] = [5, 6, 7, 8];
console.log(getdata);  //  5

// 获取其他元素
let [, , third, fourth] = [9, 10, 11, 12];
console.log(third) // 11
console.log(fourth) // 12

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o; // 给a,b 指定类型 let {a, b}: {a: string, b: number} = o;
console.log(a) // foo
console.log(b) // 12

// 在对象里使用拓展运算符 ...语法创建剩余变量
let { ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log(passthrough) //{a: "foo", b: 12, c: "bar"}
console.log(total) // 15

// 属性重命名
let { a: newName1, b: newName2 } = o;  // 这里其实是 newName1 = o.a, newName2 = o.b
console.log(newName1)  // foo
console.log(newName2)  // 12

// 默认值
// 默认值可以让你在属性为 undefined 时使用缺省值：
// 默认值生效的条件是，对象的属性值严格等于undefined。
// 如果解构失败，变量的值等于undefined。
let [foo = true] = [];
console.log(foo) // true

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a) // foo
  console.log(b) // 12
}
keepWholeObject(o)

// 函数声明
type Coo = { a: string, b?: number }
function fdd({ a, b }: Coo): void {
    // ...
    console.log(a); // foo
    console.log(b); // 12
}
fdd(o)

// 拓展运算符
// 展开操作符正与解构相反。

// 数组的拓展
let arr1 = [1, 2];
let arr2 = [3, 4];
let bothPlus = [0, ...arr1, ...arr2, 5];
console.log(bothPlus) // [0, 1, 2, 3, 4, 5]

// 对象的拓展
// 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search) // {food: "rich", price: "$$", ambiance: "noisy"}

// 对象的拓展仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法
class Col {
  p = 12;
  m() {
  }
}
let col = new Col();
let clone = { ...col };
clone.p; // ok
// clone.m(); // error!  clone.m is not a function