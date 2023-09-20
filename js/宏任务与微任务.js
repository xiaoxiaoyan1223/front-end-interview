for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },1000*i)
}
console.log(22);
//22 3 3 3
永远先执行同步的 
延时器在事件循环里,等循环完才会隔一秒打印一个3
//1、js是单线程语言
//2、js执行顺序：先同步执行后事件循环(宏任务与微任务)
//微任务：promise.then()
//宏任务：setTimeout
setTimeout(function(){
    console.log('1');
})
new Promise(resolve=>{
    console.log('promise');
    resolve()
}).then(()=>{
    console.log('微1');
}).then(()=>{
    console.log('微2');
})
console.log(2);
//打印顺序 promise 2 微1 微2 1

