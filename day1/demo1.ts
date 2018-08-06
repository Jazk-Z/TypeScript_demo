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
let tup:[string, number, boolean] = ['1', 1, undefined];
tup[3] = undefined;
// 枚举类型
enum Color {red,green,black};
console.log(Color)