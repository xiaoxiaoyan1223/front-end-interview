function throttle(fn,delay=100){
    let timer=null
    return function(){
        if(timer){
            return
        }
        timer=setTimeout(()=>{
            fn.apply(this,arguments)
            timer=null
        },delay)
    }
}
div1.addEventListener('drag',throttle(function(e){
    console.log(e.offsetX,e.offsetY)
},200))
// 防抖和节流是什么?
// 都是应对页面中频繁触发事件的优化方案防抖:避免事件重复触发
// 使用场景:1.频繁和服务端交互2.输入框的自动保存事件
// 节流:把频繁触发的事件减少,每隔一段时间执行
// 使用场景: scroll事件
