// 搭建pinia环境--组件共享数据
import {createApp} from "vue";
//第一步引入pinia创建方法
import { createPinia } from "pinia";

import App from "./App.vue";

const app = createApp(App);

//第二步创建pinia
const pinia = createPinia();

//第三步安装pinia
app.use(pinia);
app.mount("#app");