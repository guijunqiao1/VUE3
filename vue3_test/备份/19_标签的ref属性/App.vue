<template>
  <div class="Person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
    <person ref="title2"/>
  </div>
</template>

<script lang="ts" setup name="person">
  import {ref} from "vue";
  import person from "./Person1.vue"
  //数据
  let title2 = ref();//创建一个title2用于存储ref标记的内容
  //方法
  function showLog(){
    //此处为了避免使用上id的方式进行HMTL中元素的获取(因为在vue项目中的枝文件引入叶子文件的时候本质其实是将叶子文件的整体组件
    //标签内容进行填充，由于未知引入的叶子文件中是否会有相同id的标签(一般id仅能保证在当前文件下唯一)，所以最好不使用DOM中的
    //id获取标签元素的方式)
    console.log(title2.value);
  }
</script>

<!-- 对上述ref()方法的使用进行解析：
首先当template部分中存在着有ref属性的标签对象的时候，在script中执行let var = ref()的语句可以将其中的内容获取，并且最终
var中存储的值的形式为：{RefObject,vlale:对应var名称的标签对象}

使用ref属性并且结合上ref()方法的使用和id属性结合上DOM获取元素方法的使用之间的区别在于，ref()方法识别的ref属性是仅限当前文件范围中的
标签对象，而id则是引入了所有的叶子文件之后进行全局获取的(从上到下的顺序)
-->
<!-- 同时需要注意的是：
当使用ref()方法并且对应获取到的对象是组件标签对象(例如:</Person>)时，并且将该内容进行consolelog输出的时候会发现输出的内容
并不是单纯的一个标签对象的内容的形式：<h2>北京</h2>，而是Proxy类型的对象，并且其中的内容都是没什么和本应该存储的内容相关的
信息，之所以会这样是因为这是ref()方法的保护机制(但实际上会显示的单纯的键值对的内容应该是和引入的组件的源文件中的script中的定义过
的变量)，因为原则上该方法(ref属性结合上ref()方法)是不会对外部文件的标签进行信息的获取的，所以才会产生这样的外部组件的信息引入的
读取失败的情况。如果需要解决这个情况则需要在引入组件的源文件中的script部分中导入defineExpose模块，并且在script标签的末尾中执行
defineExpose()，其中形参的形式为对象{}，键值对的形式为a:a.value(可简写为a)，含义为：将组件源文件中的script部分自动return(setup语法糖)
的变量进行赋值,键名表示需要暴露的属性名，键值为实际值
-->

