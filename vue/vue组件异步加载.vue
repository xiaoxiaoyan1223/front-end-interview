<template>
    <abc v-if='k' @click='k=true'></abc>

</template>

<script>
export default{
    components:{
    //需要的时候再加载
   // abc:()=> import(../../abc.vue)
   }
 
}
</script>
