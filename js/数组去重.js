const arr = [1, 2, 2, 3, 4, 5, 4]
// 方法一 new Set
console.log([...new Set(arr)]);
// 方法二 indexOf
function unique(arr) {
    var b = []
    for (var i = 0; i < arr.length; i++) {
        if (b.indexOf(arr[i]) == -1) {
            b.push(arr[i])
        }
    }
    return b;
}
console.log(unique(arr));
// 方法三
function unique1(arr) {
    arr=arr.sort()
    for(var i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            brr.push(arr[i])
        }
    }
    return brr;
}