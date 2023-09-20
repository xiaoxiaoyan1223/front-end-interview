//--------DOM节点操作---------
// property是DOM中的属性，是JavaScript里的对象；修改对象的属性不会体现到html中
// attribute是HTML标签上的特性，它的值只能够是字符串；修改html属性会改变html结构

//两者都可能引起DOM重新渲染  平常尽量使用property，能够避免DOM一些不必要的渲染
//----------DOM性能------------------- 
//避免频繁操作DOM，不然可能造成卡顿，有以下办法减少dom操作
//缓存DOM查询的结果
const pList=document.getElementsByTagName('p')
const length=pList.length
for(let i=0;i<length;i++){
    //缓存length，只进行一次dom查询
}
//将频繁操作改为一次性操作
const liseNode= ducument.getElementsByTId('p')
//创建一个文档片段，此时还没有插入到dom树中
const frag=document.createDocumentFragment()
for(let x=0;x<10;x++){
    const li=docunment.createElement("li")
    li.innerHTML='List Item'+x
    //在这里插入不会影响dom性能
    frag.appendChild(li)
}
//都完成后再统一插入到DOM结构中
listNode.appendChild(frag)