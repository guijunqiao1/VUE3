<!-- 提前声明：此处的代码的来源是在vue2_test脚手架中进行创建的文档中获取到的 -->

<template>
  <Person v-show="isShow"/>
  <!-- 此处引入的v-if属性用于判断语法化后的内容是否成立，不成立则不显示Person销毁 -->
</template>

<script>
  import Person from "./Person4.vue"
  export default {
    name:"App",
    components:{Person},//注册组件
    //数据
    data(){//注意data中的数据不需要使用this指向,别的地方调用的时候则需要this指向
      return {
        isShow : true
      }
    }
  }
</script>


<!-- 需要注意的是启动项目的命令一般是:npm run +某某某,而其中的某某某则是在package.json文件中的script属性中的内容进行
逐一测试即可 -->

<!-- 对于上方Person组件标签使用的v-if属性进行拓展描述：
首先v-if是用于判断是否将当前的标签撤销，而对应的v-show属性用于判断是否将当前的标签进行可视化(也就是判断是否设置display:hidden)
；进而可以得出v-if可以销毁而v-show没有销毁组件
-->
