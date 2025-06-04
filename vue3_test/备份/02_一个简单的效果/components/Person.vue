<template>
  <!-- 组件结构 -->
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>电话：{{tel}}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="addAge">增加年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
  // 组件脚本
  export default{
    name:"Person",
    data(){
      return {
        name:"张三",
        age:18,
        tel:'13888888888'
      }
    },
    methods:{
      showTel(){
        alert(this.tel)
      },
      changeName(){
        this.name = "李四"
      },
      addAge(){
        this.age++
      }
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

<!-- 注意vue文件中的script(JS语法设置)标签作用的内容是组件结构的内容(相当于内部样式,亦有区别) -->
<!-- 对上述script中的暴露的内容进行解析：首先的name设置的是组件的名称，后者data函数为vue2中的语法，
专门用于控制组件结构中的赋值(相当于vue中的模版字符串的使用) -->
<!-- 对上述的组件结构的设置中的button标签中的@click属性的赋值进行解析：首先该属性名表示直接的绑定上对应的点击事件,
并且值的含义表示的是在script中设置的methods属性对应的函数体中执行的内容,同时此处对函数体中执行的内容进行解析,
主要内容为警示框内容的弹出，而警示框内容中的this指向的则是该函数出现的位置所依附的标签载体(此处也就是button标签对象)上 -->