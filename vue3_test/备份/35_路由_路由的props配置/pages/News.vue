<!-- 针对News.vue文件进行嵌套路由的演示: -->
<template>
  <div class="news">
    <ul>
       <li v-for="(item,index) in newsList" :key="item.id"><RouterLink 
       :to="{
        name:'xiang',
        params:{
          id:item.id,
          title:item.title,
          content:item.content,
        }
       }"
      ></RouterLink></li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
       <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
  import { RouterLink, RouterView } from "vue-router";
  import {reactive} from "vue";
  let newsList = reactive([
    {id:"01",title:"十种抗癌食物",content:"西兰花"},
    {id:"02",title:"如何一夜暴富",content:"学IT"},
    {id:"03",title:"震惊，万万没想到",content:"明天是周一"},
    {id:"04",title:"好消息！",content:"快过年了"},
  ])
</script>

<style>
  /* 新闻 */
  .news{
    padding:0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0,84,0);
  }
  .news-content {
    width:70%;
    height:90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>
