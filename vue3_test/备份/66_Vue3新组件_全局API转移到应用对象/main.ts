import {createApp} from "vue";
import App from "./App.vue";

//创建应用
const app = createApp(App);

app.component(hello);

//挂载应用
app.mount("#app");