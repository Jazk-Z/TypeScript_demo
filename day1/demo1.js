// 基础类型
// Boolean
var isBoolean = true;
// 特殊
var isBoolean1 = null;
var isBoolean2 = undefined;
console.log(isBoolean);
// 数字类型
var num = 1;
var num1 = 0x123;
console.log(num, num1);
// 字符串类型
var str = '11';
// 数组
var arr = [1, 2];
var arr1 = [1, 2, '3'];
// 元组 null
var tup = ['1', 1, undefined];
tup[3] = undefined;
// 枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["black"] = 2] = "black";
})(Color || (Color = {}));
;
console.log(Color);
