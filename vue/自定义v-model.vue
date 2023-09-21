<template>
    <!-- 例如vue的颜色选择 -->
    <input type="text"
    :value='text1'
    @input="$emit('change',$event.target.value)">
    <!-- 
         1、inout使用了:value 而不是v-model
         2、change和model.event要对应起来
         3、text1属性要对应起来
    -->
</template>

<script>
export default{
    model:{
        props:'text1', //对应props text1  两个名字要对应好
        event:'change'
    },
    props:{
        text1:String,
        default(){
            return ''
        }
    }
}
</script>