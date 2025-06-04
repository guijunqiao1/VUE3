//此文件为伪代码文件，主要目的是演示嵌套路由的路由器中的对象创建的语法格式的形式
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
//此为新增语句
import Detail from "../pages/Detail.vue";
//上述语句都是为了将路由对应的具体组件(component)的内容进行引入，为后续挂载上当前路由器的vue文件提供路由对应的组件内容

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
