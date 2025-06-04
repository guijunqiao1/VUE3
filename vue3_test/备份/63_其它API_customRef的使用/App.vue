<template>
  <div class="App">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script lang="ts" name="App" setup>
  import { ref } from "vue";
  import {usemsgref} from "./usemsgref";
  //数据
  //使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
  // let msg = ref("你好");

  //使用usemsgref来定义一个响应式数据且有延时效果
  let msg = usemsgref("你好",2000);

</script>

<style>
</style>

<!-- //本节的内容则是完成了实现定时器功能的ref响应化数据的自定义方法设计 -->