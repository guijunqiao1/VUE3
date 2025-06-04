<!-- 首先在路由章节的学习过程中，先把以下的基本功能进行目的的明确与实现：
1、导航区、展示区
2、请来路由器
3、指定路由器的具体规则(什么路径对应着什么组件)
4、形成一个一个的【???.vue】Class.vue、Subject.vue -->

<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
     <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news">新闻</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
     </div>
     <!-- 展示区 -->
     <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="person">
  import { RouterLink } from "vue-router";//此处引入的是同样是下方这个包下的RouterLink方法，用于提供和a标签类似的跳转
  //功能，并且其中内置的to替代原先的href属性;并且其中的active-class属性专门用于设计当该标签被激活(点击)时的附带的类名,同
  //时需要注意的是设置的active-class针对一组RouterLink标签是互通的--后续对一组的范围进行明确的规划

  import { RouterView } from "vue-router";//此处引入vue-router路由器包下的RouterView方法，该方法用于提供占位标签(也就是展示区中的标签)
</script>

<style>
  /* App  */
  .title {
    text-align: center;
    word-spacing:5px;
    margin:30px 0;
    height:70px;
    line-height: 70px;
    background-image: linear-gradient(45deg,gray,white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
  }
  .navigate {
    display:flex;
    justify-content: space-around;
    margin:0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing:5px;
  }
  .navigate a.active {
    background-color: #64967E;
    color:#ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .main-content {
    margin:0 auto;
    margin-top:30px;
    border-radius: 10px;
    width:90%;
    height: 400px;
    border: 1px solid;
  }
</style>