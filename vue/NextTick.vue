<template>
    <div id="app">
        <ul ref="ul1">
            <li v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
        <button @click="addItem">添加一项</button>
    </div>
</template>
<script>
export default{
    name:'app',
    data(){
        return{
            list:['a','b','c']
        }
    },
    methods:{
        addItem(){
            this.list,push(`${Data.naw()}`)
            this.list,push(`${Data.naw()}`)
            this.list,push(`${Data.naw()}`)
            //1、异步渲染，$nextTick待DOM渲染完再回调
            //2、页面渲染时会将data的修改做整合，多次修改，只会渲染一次
            this.$nextTick(()=>{
                //获取DOM元素
            const ulElem=this.$refs.ul1// 通过上面的ref就可以获取这个元素
            console.log(ulElem.chilNodes.length);//不通过NextTick拿不到渲染之后最新的数量
            })
            
            
        }
    }
}
</script>