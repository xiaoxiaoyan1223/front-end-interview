// 1、原型可以解决什么问题  对象共享属性和共享方法
// 2、谁有原型  函数：prototype  对象:_proto_
// 3、对象查找属性或者方法的顺序：先在对象本身查找-->构造函数中查找-->构造函数的原型中-->当前原型的原型中查找
// 4、原型链的最顶端是null
function Fun(){
    this.run=1;//第二步
}
Fun.prototype.run=2;//第四步
var obj=new Fun()
obj.run=3;//第一步
obj._proto_.run=4;//第三步
Object.prototype.run=5;//最后在当前原型的原型中查找
console.log(obj.run);
