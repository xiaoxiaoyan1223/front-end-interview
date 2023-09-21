<template>
    <div>
        diff算法是vdom中最核心 最关键的部分
        diff算法在日常中使用vue react中就可以体现出来(如key值的使用)
        diff算法是前端热门话题
        <p>树diff的时间复杂度O(n^3)后面优化时间复杂度到O(n)</p>
        <p> 优化的方法</p>
        <p>
            1、只比较同一层级 不跨级比较
            2、tag不同 则直接删掉重建 不再深度比较
            3、tag和key 两者相同 则认为是相同节点 不再深度比较
        </p>
    </div>
   
</template>