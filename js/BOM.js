//Navigator是什么
// navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，
// 该属性可以返回由客户机发送服务器的 user-agent 头部的值。
const ua=navigator.userAgent
const isChrom=ua.indexOf('Chrom')

//screen
console.log(screen.length);

//location
//https://coding.immoc/class/chapter/115.html?a=100&b=20#Anchor
console.log(location.href);//
console.log(location.protocol);//https:
console.log(location.pathname);//
console.log(location.search);//?a=100&b=20
console.log(location.hash);//#Anchor
console.log(location.host);//coding.imooc.com

//history
history.back()
history.forward()
