import calc from './test'
// import 在生产环境下， 会自动去除掉没有用到的代码
// tress-shaking 把没有用到的代码 自动删除掉
// es6 模块会把结果放到default上

console.log(calc.sum(1,3))

// scope hosting 作用域提升
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c; // 在webpack中会自动省略 一些可以简化的代码
console.log(d) 