<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大十倍后为{{ bigSum }}</h2>
    <h2>欢迎来到{{ school }}，坐落于{{ address }}，大写：{{ upperSchool }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script lang="ts" name="Count" setup>
  import {ref} from "vue";
  import {useCountStore} from "./store/count";
  import { storeToRefs } from "pinia";

  let x = useCountStore();
  let {sum,school,address,bigSum,upperSchool} = storeToRefs(x);

  //数据
  let n = ref(1);
  //方法
  function add(){
    x.increment(n.value);
  }
  function minus(){
    x.decrement(n.value);
  }
</script>

<style>
  .count {
    background-color: skyblue;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button{
    margin:0 5px;
    height:25px;
  }
</style>

