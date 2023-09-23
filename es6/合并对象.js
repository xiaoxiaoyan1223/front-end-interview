const a={a:1,b:2}
const b={b:2,c:3}
//方法一
let obj1=Object.assign(a,b);
//方法二
let obj2={...a,...b}
//方法三
function extend(target,source){
    for(key in source){
        target[key]=source[key];
    }
    return target
}
