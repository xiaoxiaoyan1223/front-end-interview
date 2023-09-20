console.log(name);//undefined
var name='小燕'
//没有局部作用于=>红杏出墙
function fn(){
    for(var i=0;i<5;i++){
        // console.log(i);
    }
    console.log(i);//5
}
fn()
//声明覆盖=>套牌车 let有局部作用域 var没有
let name2='ming'
// let name2='hong'
console.log(name2);//会报错
