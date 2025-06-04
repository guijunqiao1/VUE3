//引入createApp用于创建应用
import { createApp } from "vue" //vue为全局依赖，提供创建Vue实例的方法
//引入App根组件
import App from "./App.vue"

createApp(App).mount("#app")
//一定要注意此处挂载的DOM元素是在index.html中的元素(若未找到则呈现空白页面,在index.html中由于脚本文件中引入的main.ts文件时发生在appid的元素之后的故可以找得到)

//通过将内部挂载的标签内容的大小设计和外部挂载的标签对象的大小的设计，从而可以得出挂载的本质含义可以结合上createApp().mount()方法进行
//一致的总结：首先上述APP为从./App.vue文件中引入的组件对象，首先使用了createApp方法将APP对象实例化为正常html文本的标签的内部样式的格式,并且使用了mount()方法进行
// index.html文件中标签对象的指定(因为是在这个文件中引入的当前的main.ts文件,故查找发生在相同的层级，也就是index.html文件中)，用于将格式化后的App组件对象直接替换指定
// 形参(元素选择器),进行样式的替换(需要注意的是在App.vue文件中设置的CSS样式挂载的时候是直接作为新的index.html中的style中的文本进行样式设计的(也就是其他元素也会被影响到),而template标签中的内容
// 则正常直接嵌入(替换)到使用了mount()方法指定的标签对象的内容中)

//还有一点要注意：主要createApp方法进行解析的内容的模块主要是组件中的组件结构的部分,并且完成将样式部分被同样引入到index.html中的style中,script后续进行实验验证

// 更加准确的方法的说法：
// createApp方法创建了一个Vue应用实例(即实例化但是没有发生内容的解析)，通过挂载方法mount()将该实例渲染为HTML(即既完成了内容的解析，同时完成了挂载对象的确定)，并替换掉index.html中对应的挂载点（例如<div id="app"></div>）的内容。