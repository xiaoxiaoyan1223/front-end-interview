<template>
    <a :href="url">
        <!-- 父组件往子组件插入一段内容 -->
        <slot>
            默认内容，父组件没有设置内容时，显示这句话
        </slot>
        <!-- 作用域插槽 默认subTitle 即父组件不传的时候 在父组件中可以通过slot获取子组件的值 -->
        <slot :slotData="website">
            {{website.subTitle}}
        </slot>
    </a>
</template>
<script>
export default{
    props:['url'],
    data(){
        return {
            website:{
                url:'http://wangEditor.com/',
                title:'wangEditor',
                subTitle:'轻量级富文本编译器'
            }
        }
    }
}
</script>