<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <h3>当前求和为：{{sum}}</h3>
  </div>
</template>

<script lang="ts" name="Child" setup>
  import { ref } from 'vue';
  //数据
  let sum =ref(0);
</script> 

<style>
  .child {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
    background-color: skyblue;
  }
</style>