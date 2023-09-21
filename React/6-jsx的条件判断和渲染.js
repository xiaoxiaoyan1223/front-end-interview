//if else
if(x){

}else{

}
//三元表达式
a===b?1:2
//逻辑运算符&& ||


//列表渲染 map key
//render(){
    return <ul>{this.state.list.map(
        (item,endex)=>{
            //这里的key和vue的key类似，必填 不能是index和random
        return <li key={item.id}>index{index}</li>
    })}</ul>
//}