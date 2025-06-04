<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">增加年龄</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script setup lang="ts" name = "Person">
  import {ref} from "vue"
  let name = ref('张三')
  let age = ref(18)
  let tel = '13888888888'
  let address = "湖南"
  //启动项目的时候立即打印name变量的值和age变量的值
  console.log('1---' + name);// 1---[object Object]
  console.log('2---' + age);// 2---[object Object]
  function changeName(){
    name.value = 'zhang-san' //注意：此时这么修改name页面是不变化的
    console.log(name)
  }
  function changeAge(){
    age.value += 1 //注意：此时这么修改age页面是不变化的
    console.log(age)
  }
  function showTel(){
    alert(tel)
  }
</script>

<!-- 对上述的引入的ref模块进行分析： 
1、首先需要注意的是import 引入的语句在script标签(即JS语法环境)中才可被识别；
2、同时此处引入的ref和vue2中的<h2 ref=""></h2>中的ref是截然不同的,此处的ref是专门用来进行响应式数据的指定的，额h2标签中的ref
属性涉及Dom 元素的获取(el-form表单对象)；
3、对打印的结果中的内容进行解分析：首先打印的name属性内容按理来说应该是'张三',但实际上内容却为对象类型的内容，实际上根据检查的结果上来看可以得出
该对象中的value属性本质上就是当前的value进行存储的值的内容
4、之所以会将一个基本数据类型的值转化为一个存储对象的值的原因在于使用了ref这个构造函数,这个构造函数的形参的内容即为响应式数据value属性的内容
5、需要注意的是使用模版{{}}的时候并不需要为name添加上value属性进行指定内容的显示，实际上在template部分是不需要添加上value进行值的访问而能自动进行访问的，
同时需要注意的是在使用了将name这个变量变为实例化对象之后的话，那么在后续的script内容中进行该实例化对象的响应式数据的书写的时候需要使用.value进行索引对本质的值进行修改
6、如果在script部分对实例化变量不书写内容而进行相同的操作的话，会导致该对象的名称被当做字符串和表达式直接进行操作，而并没有对name这个实例化对象本质的值进行修改
7、之所以能够完成响应式的搭建的原因在于在每次script中的内容的value值的修改，都会对原先的template标签中的内容进行动态的修改
-->
