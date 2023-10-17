const input1=document.getElementById('input')

//封装防抖函数
function debounce(fn,delay){
    //timer是在闭包中的
    let timer=null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.apply(this.arguments)
            timer=null;
        },delay)
    }
}
input1.addEventListener('keyup',debounce(function(){
    console.log(input1.value)
}),1000)
// 防抖和节流是什么?
// 都是应对页面中频繁触发事件的优化方案防抖:避免事件重复触发
// 使用场景:1.频繁和服务端交互2.输入框的自动保存事件
// 节流:把频繁触发的事件减少,每隔一段时间执行
// 使用场景: scroll事件
