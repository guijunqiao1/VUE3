首先需要强调的是路由的名称实在原先的router文件夹下的:
创建路由器下过程中的：
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
});语句中的各个路由的设置过程中再每个路由对象中设置上新的name键值对的形式,下列展示命名之后的创建路由的形式：
const router = createRouter({
  history: createWebHistory(),   //路由器的工作模式（稍后讲解）
  routes: [ //一个一个的路由规则
    {
      name:"zhuye",
      path: "/home",
      component: Home
    },
    {
      name:"xinwen"
      path: "/news",
      component: News
    },
    {
      name:"guanyu",
      path: "/about",
      component: About
    }
  ]
});
在使用了命名路由之后的形式之后再App.vue文件中的RouterLink标签中使用to属性的时候，则可不局限使用path键名进行路由的查找了(因为本质上
RouterLink标签的to属性主要的作用就是用来获取到为该类超链接标签绑定上的路由(对象)的),也可使用其他属性进行原先再router文件夹中的index.ts中创建的路由对象
进行锁定