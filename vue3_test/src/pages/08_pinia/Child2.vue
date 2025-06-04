<template>
  <div class="Child2">
     <!-- 下方将获取到的Child1的信息进行使用 -->
      <h2>获取到的外部信息：{{ x.jiezhi }}</h2>
  </div>
</template>

<script lang="ts" name="Child1" setup>
  import { reactive } from 'vue';
  import { useCountStore } from "./store/Child1_to_Child2"

  //数据
  let Child12 = reactive({
    name:"Child2",
    age:19
  });

  //将库中的数据取出(假设exper.ts文件中的内容是专门用于存放Child1传给Child2的文件)
  let x = useCountStore();
</script>

<style>
  .Child2 {
    background-color: orange;
    width:100px;
    padding: 10px;

  }
</style>