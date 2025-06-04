<template>
  <!-- 组件结构  -->
  <div class="app">
    <h2>你好啊！</h2>
    <Person/>
  </div>
</template>

<script lang="ts">
  // 组件脚本
  import Person from './components/Person.vue'
  export default{
    name:"App", //组件名
    components:{Person} //注册组件
  }
</script>

<style>
  /* 组件样式 */
  .app{
    background-color: skyblue;
  }
</style>

<!-- 注意当前的App.vue文件表示的是Person.vue文件对应的枝文件(而Person.vue本身作为叶子文件被App.vue这个枝文件进行挂载) -->

<!-- 对上述的组件结构中的<Person/>进行解析：该为vue2的语法，用于表示将在组件脚本中导入的叶子文件中的组件进行直接的替换导入(实现将叶子文件作为组件处理，
最终枝文件也会被index.html的组件文件进行直接的导入处理,并且一个index.html文件可以使用多个枝文件进行组件的修饰功能的完善) -->



<!-- 针对上述的Person组件内容的引入以及{模版字符串类型}的赋值方法使用后续的vue3语法进行优化后的代码为：
  
<script setup name="Person" lang="ts">
  import Person from './components/Person.vue'
</script>
//之所以可以将注册组件的语句给省略的原因在于，先前注册组件的本质其实是变向地为Person标签进行直接的组件赋值(类似普通数据类型的return)
，但是在setup语法糖的环境下并不需要进行手动的return，则可自动完成注册功能(return)
-->
