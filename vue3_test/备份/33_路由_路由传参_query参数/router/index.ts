//此文件为伪代码文件，主要目的是演示嵌套路由的路由器中的对象创建的语法格式的形式
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
//此为新增语句
import Detail from "../pages/Detail.vue";

//2、创建路由器
const router = createRouter({
  history: createWebHistory(),  
  routes: [ 
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
      children:[
        {
          name:"xiang",
          path:"/detail",
          component:Detail
        }
      ]
    },
    {
      path: "/about",
      component: About
    }
  ]
});

export default router;
