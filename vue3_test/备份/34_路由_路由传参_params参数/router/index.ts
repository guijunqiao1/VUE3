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
          //下方的path中的:xxx的形式表示params参数的占位(默认每个params参数是必要的，若要使其变为可有可无的情况则在:xxx后方加上?即可(配置params中的参数的必要性))
          path:"/detail/:id/:title/:content?",//注意此处对路径的传参进行接收,并且每个:符号后的名称为接收到对应值的变量名，
          //用于在组件文件中使用useRoute方法获取到params参数中的键值对中的各个键名的设置
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
