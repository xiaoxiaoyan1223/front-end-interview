<template>
    <div>
        <p>文本插值{{message}}</p>
        <p>js表达式{{falg?'yes':'no'(只能是表达式,不能是js语句)}}</p>
        <p :id="dynamicId">动态属性ID</p>
        <p :v-html="rawHtml">
            <span>有xss风险</span>
            <span>【注意】使用v-html后，将会覆盖子元素</span>
        </p>
        <p> {{double}}</p>
        <p>
        <!-- computed有缓存，data不变则不会重新计算 -->
        <input v-model="double2">
        </p>
    </div>
</template>
<script>
import { get } from 'http';
import { log } from 'console';

export default{
    data(){
        return {
            message:'hello world',
            flag:true,
            rawHtml:'指令-原始 html<b>加粗</b> <i>倾斜</i>',
            dynamicId:`id-${Data.now()}`,
            num:1
        }
    },
    computed:{
        double(){
            return this.num*2
        },
        double2:{
            get(){
                return this.num*2
            },
            set(val){
                this.num=val/2
            }
        }
    },
    watch:{
        name(oldval,val){
            console.log('watch name',oleval,val);//值类型可正常拿到oldval和val
        },
        info:{
            handler(oldval,val){
                console.log('watch name',oleval,val)//引用类型，拿不到oldval。因为指针相同，此时已经指向新的val
            },
            deep:true//开启深度监听
        }
    }
}
</script>