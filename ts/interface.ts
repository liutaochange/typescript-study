//  在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}

function outLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let newObj = {size: 10, label: "Size 10 Object"};
outLabel(newObj);

// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

interface SquareConfig {
    color?: string;
    width?: number;
}
// 可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare)

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // annot redeclare block-scoped variable 'x'

// 数组只读

let arrays: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arrays;
console.log(ro)

// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!


// 判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。