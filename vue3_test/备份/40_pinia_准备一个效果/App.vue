<!-- 此处对两个组件的联系共享数据的使用进行演示 -->

<!-- 以下首先是实验部分的内容： -->
<!-- <template> -->
  <!-- <Count ref="title"/> -->
  <!-- <div class="App" ref="title"></div> -->
<!-- </template> -->

<!-- <script name="App" setup lang="ts">
  import Count from './Count.vue';
  import {ref} from "vue";
  let title = ref();
  console.log(title.value);
</script> -->


<!-- 对ref属性的使用进行总结：
首先该属性用于替代DOM方法获取文件中的标签对象(包括当前文件的和外部文件的标签对象)，当使用ref()方法并且对应获取到的对象是组件标签对象(例如:</Person>)时，并且将该内容进行consolelog输出的时候会发现输出的内容
并不是单纯的一个标签对象的内容的形式：<h2>北京</h2>，而是RefObject类型的对象，并且其中的内容都是没什么和本应该存储的内容相关的
信息，之所以会这样是因为这是ref()方法的保护机制(但实际上会显示的单纯的键值对的内容应该是和引入的组件的源文件中的script中的定义过
的变量)，因为原则上该方法(ref属性结合上ref()方法)是不会对外部文件的标签进行信息的获取的，所以才会产生这样的外部组件的信息引入的
读取失败的情况。如果需要解决这个情况则需要在引入组件的源文件中的script部分中导入defineExpose模块，并且在script标签的末尾中执行
defineExpose()，其中形参的形式为对象{}，键值对的形式为a:a.value(可简写为a)，含义为：将组件源文件中的script部分自动return(setup语法糖)
的变量进行赋值,键名表示需要暴露的属性名，键值为实际值-->

<!-- 对上述的ref()方法获取到的值的类型进行"正确"的归纳：首先获取到的是组件对象则是value中为Proxy对象的RefObjct对象形式;对于当前文件的对象则是正常的
RefObject对象，其中的value的内容为标签对象本身,并且在打印的每个情况的value则都是undefined的结果，对于组件标签对象的话如果在其文件中使用defineExpose方法则可
进行将指定的内容进行以Proxy对象的键值对的形式进行逐一的显示，但是针对单纯的标签对象的使用而不是打印的话则都可以正常进行使用 -->

<!--同时需要注意和其他的属性使用defineProps、defineExpose方法的用途进行区别，前者为标签对象的获取的属性，中者为组件文件获取引用当前文件的文件中传递的属性参数的方法、
后者则为在使用前者方法获取到对象的情况下(若为组件标签对象的情况)，则该方法用于将打印value值的时候呈现出来的组件文件中的内容(组件文件决定，对象的键值对形式)
-->

<!-- 当前文件标签和组件标签都有相同的ref值则优先获取当前文件的标签对象 -->


<!-- 此处对两个组件的联系共享数据的使用进行演示 -->
<template>
  <div>
    <Count/>
    <LoveTalk/>
  </div>
</template>

<script name="App" setup lang="ts">
  import Count from './component/Count.vue';
  import LoveTalk from './component/LoveTalk.vue';

</script>


