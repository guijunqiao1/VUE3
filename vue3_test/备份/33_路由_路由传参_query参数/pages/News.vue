<!-- 针对News.vue文件进行嵌套路由的演示: -->
<template>
  <div class="news">
    <ul>
      <!-- 第一种向子路由组件传参的方式 -->
      <!-- <li v-for="(item,index) in newsList" :key="item.id"><RouterLink :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{item.title}}</RouterLink></li> -->
      <!-- 对第一种写法进行描述，需要注意的是此处设计的RouterLink和上节的区别在于，此处利用了to本身的性质(直接对url中的路径(含查询字符串)的内容直接进行修改,并且完成对应路由的组建的占位挂载) -->
       <!-- 对第一种写法进行描述，同时此处需要注意的是：上述对to的传递的参数的形式进行动态地指定的形式的原理在于：本身对属性添加上v-bind:(简写为:)表示的含义是创造一个类似python中的print方法的()中的
        环境，并且忽视标签内部属性赋值自带的""符号看作为单纯的()，此时其中的直接的文本内容(除引号本身外)会被直接统一当作变量进行处理,则此时由于需要赋值的文本即有字符串又有变量，故使用模板
        字符串的方式进行赋值(需要注意的是原先的""已经被忽视了，则需要自己加上``进行模板字符串的格式套用) -->

      <!-- 第二种向子路由组件传参的方式 -->
      <!-- 需要注意的是外部已经有了""进行包裹，所以此处使用''进行字符串的包裹;并且还要注意的是不能在标签的内部(含内容以及<>中)书写注释，否则报错-->
      <li v-for="(item,index) in newsList" :key="item.id"><RouterLink 
        :to="{
          // path:'/news/detail',
          name:'xiang',
          query:{
            id:item.id,
            title:item.title,
            content:item.content
          }
        }"
        >{{item.title}}</RouterLink></li>
        <!--同时需要注意的是to的两种形式的本质其实都是为了将路由以及对应路由组件进行确定，从而修改url(注意先后关系，也就
        是说明设置的path并不是修改的依据，而是对应路由组件的path进行计算并修改的),而对于Detail需要使用传参则是通过url这个
        介质进行内容的获取（useRoute方法） -->
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
  //初始化新闻列表
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
