<template>
  <!-- 组件结构 -->
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>电话：{{tel}}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="addAge">增加年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr>
    <h2>测试1：{{a}}</h2>
    <h2>测试2：{{b}}</h2>
    <h2>测试3：{{c}}</h2>
    <button @click="b">测试</button>
  </div>
</template>

<script lang="ts">
  // 组件脚本
  export default{
    name:"Person",
    data(){
      return {
        a:100,
        c:this.name
      }
    },
    methods:{
      b(){
        console.log("b");
      }
    },
    setup(){
      let name = "张三";
      let age = 18;
      let tel = '13888888888';
      function changeName(){
        name = "李四";
        console.log(name);
      }
      function showTel(){
        alert(tel);
      }
      function addAge(){
        age++;
        console.log(age);
      }
      return {name,age,tel,changeName,addAge,showTel};
    }
  }
</script>

<style>
  /* 组件样式 */
  .person{
    background-color: gray;
  }
  button {
    margin:5px
  }
</style>

<!-- 此节体现的内容分别有： -->
<!-- 1、原先optionsAPI中的组件设置可以和compositionAPI中的组件设置(此处即为setup配置项)一起混合使用。 -->
<!-- 2、由于setup钩子的执行在所有钩子生命周期的最前端，故setup内容就算写在了data配置项和method配置项的后方，但是任然优先执行。 -->
<!-- 3、optionsAPI中的配置项可以访问compositionAPI中的配置项的内容，即在data中赋值的值中调用了setup提供的值，成功进行访问(本质访问的是响应完setup后的标签中的值) -->
<!-- 4、compositionAPI中的配置项无法访问到optionsAPI中的配置项的内容(由于setup中无法直接使用this访问到标签对象(中的内容)) -->