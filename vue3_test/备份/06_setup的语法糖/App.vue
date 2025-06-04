<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">增加年龄</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script setup lang="ts" name = "Person">
  let name = '张三'
  let age = 18
  let tel = '13888888888'
  function changeName(){
    name = 'zhang-san' //注意：此时这么修改name页面是不变化的
    console.log(name)
  }
  function changeAge(){
    age += 1 //注意：此时这么修改age页面是不变化的
    console.log(age)
  }
  function showTel(){
    alert(tel)
  }
</script>


<!-- 对上方的setup语法糖的形式进行解析：
首先<script setup></script>这个整体和在原先的<script lang="ts"></script>之中书写的setup(){}的框架是等价的，
并且需要注意的是在后续的script标签中一定要设置和原先的script标签的lang属性使用的语言的相同--否则会在运行的时候控制台报错;
并且在该框架下的内容是自动进行各个变量以及函数(方法)的自动返回到对应的template标签中的模版的值中
-->
<!-- 需要注意的是在使用了export进行当前vue文件的组件的结构暴露的script标签是不能和setup语法糖的script标签合并为一个标签的，
因为script(setup语法糖类型)和原先的script标签中的setuo(){}中的内容是等价的，如果合并则会导致暴露组件的内容发生在setup函数体中 -->

<!-- 如果执意要将export default的script和setup的script进行合并的话则会导致语法报错--提示内容为默认导出必须位于文件或模块声明的顶部 -->

<!-- 需要注意的是：如果export default部分的script不存在则会导致传出去的组件的名称为当前文件的名称.-->

<!-- 
还需要注意的是：setup语法糖中的部分在实际执行的过程中可以理解为包装为正常的export default中的setup(){}模块中的内容(包含return 语句)之后
放置在隐式的export default中进行暴露显现(注意由于该export的script是隐式故没有设置name，则整个插件的名称以当前所处的文件夹名称命名)--整个包装的
过程发生的前提是当前文件中不存在着export的script的情况下才会发生
-->

<!-- 同时需要注意的是无论是否是使用setup语法糖进行设置的setup语法提供的组件的配置在页面上进行呈现的时候的的检查页面中的 -->
<!-- vue窗口中的当前组件下看到的setup目录下的内容中分为setup 和 setup other两个部分,其中setup的内容为组件的配置数据、后者为组件的配置方法 -->