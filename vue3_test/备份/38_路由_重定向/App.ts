//所谓重定向也就是在寻找某个路由器中设置的路由的时候，由于设置的路由中存在着redirect属性进行另外的路由的指定，使得停止当前
//的路由的寻找而是开始进行下一个指定的路由的寻找的操作

// 对重定向的标志性属性(redirect)的演示:

// 首先正常的路由器路由配置文件(存在于router文件夹下的index.ts文件中)的内容：

//此文件为伪代码文件，主要目的是演示嵌套路由的路由器中的对象创建的语法格式的形式
// import { createRouter, createWebHistory } from "vue-router";
// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";
// import News from "../pages/News.vue";
// import Detail from "../pages/Detail.vue";

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
          component:Detail
        }
      ]
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/",
      redirect: "/news/detail"//此处为对原'/'路由的查找的重定向路由查找目标的设
      }
    }
  ]
});

export default router;

