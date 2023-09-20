//函数作为返回值
function create(){
    const a=100;
    return function(){
        console.log(a)
    }
}

const fn=create();
const a=200;
fn()//100

//函数作为参数
function print(fn){
    const a=200
    fn()
}
const b=100
function fn(){
    console.log(b)
}
print(fn)//100
//考题
(function(){
    //下面相当于var b=10;c=10;那么c会作为全局变量
    var b=c=10;
})()
console.log(b);//会报错
console.log(c);//10
//考题
function c(){
    var b=1;
    function a() {
        console.log(b);
        var b=2;
        console.log(b);
    }
    a()
    console.log(b);
}
c()
//打印结果 undefined 2 1
//特别注意 一定要看本层有没有声明变量 如果a()里面没有 var b=2 那么打印结果为 1 1 1

//考题
function fun() {
    a=10;//相当于window.a=10 属于全局变量
    var a=20
    console.log(a);//优先找内层的a=20
}
fun()
//20

//考题
function fun() {
    var a=20
    a=10
    console.log(a);//优先找内层的a=20 但a又被赋值为10，所以a最终为10
}
fun()
//10
/*总结:
    ·闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！！！
    .除函数外，js没有块级作用域
    .作用域链：内部可以访问外部的变量，但是外部不能访问内部的变量(优先内部)

    在JavaScript中，_.countBy是lodash库中的一个函数，用于根据指定的条件对数组或对象进行分组并计数。它接受一个集合（数组或对象）和一个迭代函数作为参数，并返回一个新的对象，其中键是迭代函数应用于集合中的元素的结果，值是对应键出现的次数。

    以下是一个示例代码，展示了如何使用_.countBy函数：
    
    const _ = require('lodash');
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const result = _.countBy(numbers, (num) => {
     return num % 2 === 0 ? 'even' : 'odd';
    });
    
    console.log(result);
    输出结果将是一个对象，表示数组中奇数和偶数的数量：
    
    {
      odd: 5,
      even: 5
    }
*/
