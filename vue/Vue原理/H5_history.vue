<template>
    <div>
        <p>
            用url规范的路由，但跳转时不刷新页面
            监听方式：history.pushState
                     window.onpopstate
            H5需要后端支持
        </p>
        <p>
            hash与H5的选择
            ·to B系统推荐用Hash，简单易用，对url规范不敏感
            ·to C系统 可以考虑选择H5 history  但需要服务端支持
            ·能选择简单的就不要用复杂的，考虑成本和收益
        </p>
    </div>
</template>