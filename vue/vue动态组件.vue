<template>
    <div class="hello">
      <h3>使用component 的 is特性 有缓存的组件</h3>
      <ul>
        <!-- 方法1：component的is属性 -->
        <li 
        v-for="(item,index) in tabList" 
        :key="index" 
        style="cursor:pointer" 
        @click="changeView(index)">
        {{item}}</li>
        <!-- 可以通过keep-alive对组件进行缓存，对于不显示的组件不是去销毁他，而是使他处理不激活的状态，当需要显示时再去激活。 -->
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
        <!-- 方法2：v-if实现动态组件切换 -->
        <div>
            <shuma v-if="index===0"></shuma>
            <shouji v-else-if="index===1"></shouji>
            <pc v-else></pc>
        </div>
      </ul>
    </div>
  </template>
  <script>
// 相关的组件代码在这里不展示
import shouji from "./shouji";
import pc from "./pc";
import shuma from "./shuma";
export default {
  name: "HelloWorld",
  components: {
    shouji,
    pc,
    shuma,
  },
  data() {
    return {
      index: 0,
      arr: ["shuma", "shouji", "pc"],
      tabList: ["数码", "手机", "电脑"],
    };
  },
  computed: {
    currentView() {
      return this.arr[this.index];
    }
  },
  methods: {
    changeView(index) {
      this.index = index;
    }
  },
};
</script>