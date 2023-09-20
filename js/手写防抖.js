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
