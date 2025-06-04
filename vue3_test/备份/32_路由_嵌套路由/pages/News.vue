<!-- 针对News.vue文件进行嵌套路由的演示: -->
<template>
  <div class="news">
    <ul>
      <li v-for="(item,index) in newsList" :key="item.id"><RouterLink to="/news/detail">{{item.title}}</RouterLink></li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <!-- 此处由于需要对子路由组件进行嵌套引入，故需要使用占位标签RouterView -->
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

<!-- 此处对占位标签RouterView和联系超链接标签RouterLink之间的区别进行解释说明：首先前者用于确定路由组件呈现的区域的区域的划分， -->
<!-- 并且自身的内容由RouterLink标签中to属性指定的路由决定，而之所以能够找到路由以及路由对应的内容，是因为下方首先导致了能够查询到路由，
进而根据路由的component属性进行准确的路由对应组件的搬运 -->
<!-- 上述标签的关系总结：RouterView占位，并且RouterLink中设置的路由决定占位标签中显示的具体的组件内容，并且对于设置的路由而言需要根据
创建路由器中的路由的层级关系进行从顶部递进的方式进行路由的设置-->
<!-- 
对此处的News文件也能使用路由的原因进行解释(App.vue文件能用是因为在main.ts文件中的时候使用过app.use(router))：
1、当你在 App.vue 中使用 app.use(router) 时，router 会被应用到整个 Vue 应用程序中，而不仅仅是 App.vue 组件。这意味着，整个应用，包括 App.vue 中的子组件（如 News.vue），都会拥有路由功能。因此，News.vue 也可以访问和使用路由。
2、在 Vue 3 中，app.use(router) 会将路由器实例挂载到整个 Vue 应用的上下文中。这个路由器实例会被所有的组件（包括父组件和子组件）共享。所以，News.vue 作为 App.vue 的子组件，并不需要单独调用 news.use(router)，因为路由器已经在父组件级别（App.vue）挂载了，并且会自动在所有子组件中生效 
-->