// 基础类型
// Boolean
let isBoolean: boolean = true;
// 特殊
let isBoolean1: boolean = null;
let isBoolean2: boolean = undefined;
console.log(isBoolean);
// 数字类型
let num: number = 1
let num1: number = 0x123
console.log(num, num1)
// 字符串类型
let str: string = '11'
// 数组
let arr: number[] = [1, 2];
let arr1: Array<any> = [1, 2, '3'];
// 元组 null
let tup: [string, number, boolean] = ['1', 1, undefined];
tup[3] = undefined;
// 枚举类型
enum Color { red, green, black };
console.log(Color)
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
console.log(c);
// any  可以赋值任何值
let zzy: any = undefined;
zzy = 1;
let anyArr: any[] = [1, "2", {}]
// void
function zzya(): void {
    alert(1);
}

let aa:void = null;
let aa1:void = undefined;
// null undefined
let u:null = null;
let n:undefined = undefined;

// never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// 断言类型

let stre:any = 'wangcongcong';
let as1:number = (<string>stre).length;
let as2:number = (stre as string).length;  