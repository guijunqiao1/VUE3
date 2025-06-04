<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <h3>当前求和为：{{sum}}</h3>
  </div>
</template>

<script lang="ts" name="Child" setup>
  import { ref } from 'vue';
  import axios from 'axios';
  //数据
  let sum =ref(0);
  // let xxx = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  // console.log(xxx);//Promise{<pending>},需要使用await进行解包,并且此处由于处于setup语法糖中调用的该方法所以在外部自动添加了async
  let {data:{content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  // console.log(content);//土味情话内容
</script> 

<style>
  .child {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
    background-color: skyblue;
  }
</style>