<template>
  <ul class="news-list">
    <li>编号：{{params.id}}</li>
    <li>标题：{{params.title}}</li>
    <li>内容：{{params.content}}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail"> 
  import { toRefs, ToRefs } from "vue";
  //此处的子组件需要接收url中传递过来的参数
  import {useRoute} from "vue-router";
  const route = useRoute();
  let {params} = toRefs(route);
</script>

<style>
  .new-list {
    list-style: none;
    padding-left: 20px;
  }
  .news-list>li {
    line-height: 30px;
  }
</style>