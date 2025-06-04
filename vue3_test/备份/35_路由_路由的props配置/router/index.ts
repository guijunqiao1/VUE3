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
          path:"/detail/:id/:title/:content?",//注意此为params参数的变量命名语句
          component:Detail,

          // 第一种写法(布尔值的形式)：将路由收到的所有params参数(对象的形式)作为props传给路由组件
          // props:true //此处设置该属性为true(默认为false)表示的是是否将params参数传递到component指定的组件中，并且该组件中进行参数的确认获取需要使用到defineprops方法进行参数的确认

          // 第二种写法(函数的形式)：可以自己决定将什么作为props给路由组件(函数的形式,该函数的形参固定为当前设置的路由的对象信息)
          // props(route){//此处演示将路由的query参数传递给组件--毕竟params只需要布尔方法就很方便了
          //   return route.query;
          // }

          //第三种写法(对象的形式)：可以自己决定将什么作为props给路由组件--固定内容,没有底层提供的路由对象
          // props:{
          //   a:100,
          //   b:200,
          //   c:300
          // }

          //注意上述都是针对“路由组件”的配置，先前的<Person a="哈哈"/>则为正常的一般组件的配置
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
