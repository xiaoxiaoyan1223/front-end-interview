var str='你好'
var obj={str:'这是obj对象内的str'}
function fun(){
    console.log(this,this.str);
}
fun.call(obj)//call立即执行  这是obj对象内的str
fun.apply(obj)//apply立即执行
fun.bind(obj)//bind不会立即执行，因为bind返回的是函数

fun.call(obj,'张三',88)
//上面相当于
function fun(name,age){
    this.name='张三',
    this.age=88
    console.log(this,this.str);
}
fun.apply(obj,['张三',88])

function fn1(a,b){
    console.log('this',this)
    console.log(a,b)
    return 'this is fn1'
}
const fn2=fn1.bind({x:100},10,20)
const res=fn2()
console.log(res)