<template>
  <div class="count">
    <h2>当前求和为：{{ x.sum }}</h2>
    <h2>欢迎来到{{ x.school }}，坐落于{{ x.address }}</h2>
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

  let x = useCountStore();
  
  //数据
  let n = ref(1); //用户选择的数字
  //方法
  function add(){
    //第一种修改pinia库中存储的数据的值的方式
    // x.sum += n.value;
    // x.school = "尚硅谷";
    // x.address = "北京";

    //第二种修改pinia库中存储的数据的值的方式--批量起来比较方便，并且这种方式在对实际内容没有修改的情况下也会进行一次赋值的操作时间消耗
    // x.$patch({
    //   sum:sum+1,
    //   address:"北京",
    //   school:"尚硅谷"
    // });

    //第三种修改pinia库中存储的数据的值的方式
    x.increment(n.value);

  }
  function minus(){
    //第一种修改pinia库中存储的数据的值的方式
    // x.sum -= n.value;
    // x.school = "尚硅谷";
    // x.address = "北京";

    //第二种修改pinia库中存储的数据的值的方式--批量起来比较方便，并且这种方式在对实际内容没有修改的情况下也会进行一次赋值的操作时间消耗
    // x.$patch({
    //   sum:sum+1,
    //   school:"尚硅谷",
    //   address:"北京"
    // });

    //第三种修改pinia库中存储的数据的值的方式
    x.increment(n.value);

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

<!-- pinia结合ts文件的好处在于有各种各样的提示（自带接口检查的效果） -->