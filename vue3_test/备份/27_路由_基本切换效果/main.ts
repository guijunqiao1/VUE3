import { createApp } from "vue";
//引入App根组件
import App from "../../src_后续使用/App.vue";
//引入路由器
import router from "./router/index";

//原先该文件的最后一行代码为：createApp(App).mount("#app")--即直接创建应用对象，并且挂载到对应为止就没了,而下方则还有对应
//的路由的设置(全局使用)在当前的主项目文件中

//创建一个应用对象
const app = createApp(App);

//使用路由器
app.use(router);//此处可理解为项目的主要执行文件(ts文件的形式存在，和Node.js中的项目文件中的app.js文件等价的地位，并且
//路由的使用中间件函数同样发生在这个文件中)
//同时需要注意的是此处使用了app.use方法挂载上router路由器则使得原先和router提供的路由完全没关系的设置变得和App.vue文件有关系起来的

//挂载整个应用到app容器中--因为本质上还是index.html头文件中的src属性对当前的文件进行引用，该语句为确定挂在的具体标签的位置
app.mount("#app");//使用了该方法之后挂载vue枝文件的同时也附带着app对象在当前所处的ts(类js)文件中充当着路由发挥的作用
