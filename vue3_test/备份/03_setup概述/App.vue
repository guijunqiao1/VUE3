<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Person',
    //beforeCreate方法的执行，用于实验setup这个配置项是不是真正意义上领先所有钩子执行的
    beforeCreate(){
      console.log(1)
    },
    setup(){
      // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据--即不是写到这里的时候页面直接发生对应内容该变的数据）
      let name = '张三'
      let age = 18
      let tel = '13888888888'

      // 方法，原来写在methods中
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

      // 返回一个对象，对象中的内容，模板中可以直接使用
      //需要注意的是这里是主动进行配置为对象的形式表示的含义是：
      // 将对应内容直接进行类似模版字符串的赋值方式进行直接的赋值
      return {name,age,tel,changeName,changeAge,showTel}//写到这里页面发生响应式改变
    }
  }
</script>

<!-- 对上述的setup配置项记性解析：
通过在其中编写上函数内容以及基本数据进行对象的整体的返回并且执行对应类似模版字符串的赋值方式进行赋值
通过该演示可看出来setup的返回值类型为对象,同理data同样，只不过data本身这个对象被严格要求了只能含有基本数据类型的属性，
而不能含义函数作为属性值进行类似模版字符串的赋值
-->

<!-- 对beforeCreate钩子进行解析：
在 Vue.js 中，"钩子"通常指的是生命周期钩子，这些是特定的函数，你可以在组件的不同生命周期阶段进行配置，
以便在这些阶段执行特定的代码。这些钩子函数在 Vue 组件的生命周期的关键点被自动调用，例如在组件创建、挂载、更新、以及销毁过程中。

1、beforeCreate: 组件实例被创建之初，组件的数据观察和事件/生命周期钩子自身尚未初始化时调用。
2、created: 组件实例创建完成后调用，此时已完成数据观察、属性和方法的运算，data 和 methods 已可用。
3、beforeMount: 在挂载开始之前被调用，相关的 render 函数首次被调用。
4、mounted: 组件被挂载到 DOM 上后调用，这时可以访问到 DOM 节点。
5、beforeUpdate: 数据更新时调用，发生在虚拟 DOM 打补丁之前。
6、updated: 组件的数据变化导致虚拟 DOM 重新渲染并应用更新后调用。
7、beforeDestroy: 组件销毁前调用。
8、destroyed: 组件销毁后调用。 -->
