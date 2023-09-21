<template>
    <div>

        DOM操作非常耗费性能
        解决思路：能不能把计算转换为js计算
        vdom原理:用JS模拟DOM结构，计算出最小的变更，操作DOM
        下面用js模拟DOM结构

        <div id="div1" class="container">
            <p>vdom</p>
            <ul style="font-size:20px">
                <li>a</li>
            </ul>
        </div>  
        <div>
            用js模拟DOM结构
            新旧vnode对比 得出最小的更新范围 最后更新DOM
            数据驱动视图的模式下 有效控制DOM操作
        </div>  
        
    </div>
   
</template>
<script>
//以下是用js模拟
 {
    tag:'div',
    props:{
        className:'container',
        id:'div1'
    },
    children:[
        {
            tag:'p',
            children:'vdom'
        },
         {
            tag:'ul',
            props:{style:'font-size:20px'},
            children:[
                {
                    tag:'li',
                    children:'a'
                }
            ]
         }
    ]

}
</script>