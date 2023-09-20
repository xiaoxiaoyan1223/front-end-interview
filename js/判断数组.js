const arr=[1,2,3]
// 方法一：isArray()
console.log(Array.isArray(arr));
// 方法二:instanceof
console.log(arr instanceof Array);
// 方法三：通过prototype原型
console.log(Object.prototype.toString.call(arr).indexOf('Array')>-1);
// 方法四：通过isPrototypeOf
console.log(Array.prototype.isPrototypeOf(arr));
// 方法五：constructor
console.log(arr.constructor.toString().indexOf('Array')>-1);