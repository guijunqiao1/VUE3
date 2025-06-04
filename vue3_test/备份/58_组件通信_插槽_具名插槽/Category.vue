<template>
  <div class="Category">
    <h2>{{ title }}</h2>
    <div v-if="title==='热门游戏列表'">
      <slot name="s1">默认内容1</slot>
      <slot name='s11'>默认内容11</slot>
    </div>
    <div v-if="title==='今日美食城市'">
      <slot name="s2">默认内容2</slot>
      <slot name="s22">默认内容22</slot>
    </div>
    <div v-if="title==='今日影视推荐'">
      <slot name="s3">默认内容3</slot>
      <slot name="s33">默认内容33</slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="Game">
  defineProps(['title']);
</script>

<style scoped>
.Category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>

<!-- //针对之前学过的默认插槽(slot)的name为default -->
