<template>
    <div>
        作用：多个组件有相同的逻辑抽离出来 
        缺点：变量来源不明确，不利于阅读，多个mixin可能造成命名冲突
             mixin和组件可能出现多对多的关系，复杂度比较高
    </div>
</template>
<script>
import myMixin from''
export default {
    mixins:[myMixin] //可以添加多个会自动合并
}
</script>
