<template>
  <div class="child">
    <h3>我是子组件</h3>
    <GrandChild/>
  </div>
</template>

<script setup lang="ts" name="Child">
  import GrandChild from './GrandChild.vue'
</script>

<style scoped>
  .child {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>

<!-- //注意整个祖先组件和后代组件进行通信是没有当前组件的参与的(也就是inject方法会依据祖先后辈线进行全局的查找的)，但是必须要有组件的引入使得祖先关系和后代关系的成立(这样才能保证inject方法查询的方向(即由后辈到前辈)) -->