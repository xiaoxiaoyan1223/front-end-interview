new 内部的原理
function create(fn,...args){
    // 1、创建一个空对象
    var obj={}
    // 2、将空对象的原型指向于构造函数的原型
    Object.setPrototypeOf(obj,fn.prototype)
    // 3、将空对象作为构造函数的上下文(改变this指向)
    var result=fn.apply(obj,args)
    // 4、对构造函数有返回值的预处理
    return result instanceof Object?result:obj
}