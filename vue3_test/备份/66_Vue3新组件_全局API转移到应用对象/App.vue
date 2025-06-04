<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Child/>
  </div>
</template>

<script lang="ts" name="App" setup>
  import Child from './Child.vue';
</script>

<style>
  .app {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
    background-color: #ddd;
  }
</style>