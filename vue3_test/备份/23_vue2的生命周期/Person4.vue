<template>  
  <div class="person">
    <h2>当前求和为：{{sum}}</h2>
    <button @click="add">点我sum加一</button>
  </div>
</template>

<script>
  export default {
    //注意下方的语句用于将组建名称的固定格式(两个单词组成组件名)给取消,谁充当组件文件，谁就需要这个语句
    /* eslint-disable */
    name:"Person",
    //数据
    data(){
      return {
        sum:1,//此处的sum放置到了一个地方
      }
    },
    //方法
    methods:{
      add(){
        this.sum+=1;//此处this指向sum存放的地方并且进行引用
      }
    },
    //创建前的钩子
    beforeCreate(){
      console.log("创建前");
    },
    //创建后的钩子
    created(){
      console.log("创建完毕");
    },
    //挂载前的钩子  
    beforeMount(){
      console.log("挂载前");
    },
    //挂载后的钩子
    mounted(){
      console.log("挂载完毕");
    },
    //更新前的钩子
    beforeUpdate(){
      console.log("更新前");
    },
    //更新后的钩子
    updated(){
      console.log("更新完毕");
    },
    //销毁前的钩子
    beforeDestroy(){
      console.log("销毁前");
    },
    //销毁后的钩子
    destroyed(){
      console.log("销毁完毕");
    }
  }
</script>

<style>
  .person {
    background-color: skyblue;
    padding: 20px;
    border-radius: 10;
    box-shadow: 0 0 10px;

  }
</style>

<!-- 需要注意的是：整个生命周期的各个阶段的操作都是针对组件本身而言的，所以在组件内容发生更新的时候才会执行对应阶段的
函数方法的内容 -->

<!-- 同时需要注意的是：针对vue2中生命周期对应的各个函数而言，调用的时候使用的是函数名(){执行内容逻辑的替换}，注意和正常
函数的调用之间的区别(函数名(实参){})，此处则仅是对函数内容的一个修改操作，而不是调用操作(注意) -->