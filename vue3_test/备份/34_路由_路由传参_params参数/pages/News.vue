<!-- 针对News.vue文件进行嵌套路由的演示: -->
<template>
  <div class="news">
    <ul>
      <!-- 第一种传参(params)方式：字符串的形式 -->
      <!-- <li v-for="(item,index) in newsList" :key="item.id"><RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{{item.title}}</RouterLink></li> -->
      <!-- 第二种传参(params)方式：对象的形式 -->
       <li v-for="(item,index) in newsList" :key="item.id"><RouterLink 
       :to="{
        // path:'/news/detail/',//此处报错的原因在于对于params传参的形式的to的路由查找配置项中不能使用path属性进行配置了,可以使用name进行替代查找
        name:'xiang',
        params:{//此处会警告当前的params在路由中没有进行设置的原因在于：此处为伪代码文件内容，并没有为该vue文件配置上对应的路由器
          //而path每报错的原因在于该to的对象形式的本身默认是带path这个属性的;对于如果连接上了router文件夹下的index.ts文件的话，其中的
          //path属性设置为/:xxx/:yyy/:zzz的形式则表示配置了对应params属性的设置--不要忘了，本质上to属性的所有配置都是是为了找到对应的组件路由
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
