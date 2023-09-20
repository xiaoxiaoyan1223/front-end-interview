//----------------浅克隆--------------
const obj1={
    age:20,
    name:'xxx',
    address:{
        city:'beijing'
    },
    arr:['a','b']
}
const obj2=obj1;
//-----------------深克隆---------------
function deepClone(obj = {}) {

    return {}
}
const obj3=deepClone(obj1)
{
    if(typeof obj1!='obj'||obj1==null){
        return obj1;
    }
    let result;
    if(obj instanceof Array){
        result=[];
    }else{
        result={}
    }
    for(let key in obj){
        //保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归调用
            result[key]=deepClone(obj[key])
        }
    }
    return result;
}