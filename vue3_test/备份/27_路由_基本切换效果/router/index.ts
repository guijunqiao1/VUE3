//创建一个路由器，并暴露

//1、引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入一个一个可能要呈现的组件
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";


//2、创建路由器
const router = createRouter({
  history: createWebHistory(),   //路由器的工作模式（稍后讲解）
  routes: [ //一个一个的路由规则
    {
      path: "/home",
      component: Home
    },
    {
      path: "/news",
      component: News
    },
    {
      path: "/about",
      component: About
    }
  ]
});

//将路由器对象进行暴露
export default router;

//对创建路由器方法进行函数解析：


//此处对解决正常进行创建路由器方法的使用过程中飘红的现象的解决方案进行解释：
// 首先引入vue-router包中的createWebHashHistory(因为飘红的原因在于vue3的特殊语法规范的强调，故需导入的vue3的包中方法),
//而后再createRouter方法的对象类型的形参中赋值history:createWebHashHistory()的键值对即可，后续讲到路由器的工作模式的时候对此键值对的
//含义进行补充