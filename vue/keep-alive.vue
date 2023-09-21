<template>
    <div>
        缓存组件 性能优化
        使用场景：频繁切换，不需要重复渲染
        <div>
            加入keep-alive会多两个生命周期 activated  deactived
            如果加入keep-alive 第一次进入组件会执行 beforeCreate created beforeMount mount activated
            如果第二次进入只执行activated 
        </div>
    </div>
</template>