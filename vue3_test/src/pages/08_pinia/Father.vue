<!-- //下方开始回顾pinia并且完成组件的通信，由于本质为库的信息存储的形式所以应该实现的是任意组件之间的通信 -->

<template>
  <div class="father">
    <h3>父组件</h3>
    <Child1/>
    <Child2/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';
</script>

<style scoped>
  .father{
    background-color: rgb(165, 165, 165);
    padding: 20px;
    border-radius: 10px;
  }
</style>
