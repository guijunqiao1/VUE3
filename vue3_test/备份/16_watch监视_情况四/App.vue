<template>
  <div class="Person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>汽车：{{person.car.c1}}、{{person.car.c2}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue';
  //数据
  let person = reactive({
    name:"张三",
    age:18,
    car:{
      c1:"奔驰",
      c2:"宝马"
    }
  })
  //方法
  function changeAge(){
    person.age++;
  }
  function changeName(){
    person.name += '~';
  }
  function changeC1(){
    person.car.c1 = "奥迪";
  }
  function changeC2(){
    person.car.c2 = "大众";
  }
  function changeCar(){
    person.car = {
      c1:"雅迪",
      c2:"爱玛"
    }
  }
  //监视:情况四:监视响应式对象中的某个属性-且该属性为基本类型，要写成函数式:
  // const stopWatch = watch(()=>person.name,(newValue,oldValue)=>{
  //   console.log(person);
  //   console.log(newValue);
  //   console.log(oldValue);
  // })
  //监视:情况四:监视响应式对象中的某个属性-且该属性为基本类型，要写成函数式:
  const stopWatch = watch(person.car,(newValue,oldValue)=>{//首先嵌套在Proxy中的对象也是会成为Proxy对象类型
    console.log(person.car);
    console.log(newValue);
    console.log(oldValue);
    //若点击的是前两个汽车相关的按钮，则表示的监视的对象是person.car对象本身由于为Proxy类型故自带deep:true的固定配置项,
    //所以内容发生修改也会被监视到
    //而点击第三个更换汽车的按钮本质上其实是对person.car这个Proxy对象进行直接的内容(地址)更换,后续内容执行会失去响应式
    //但使用了()=>对第一个形参进行包裹的话，则会导致监视的确切的为person.car本身的地址"值"了，不具有指向的功能了,当值发生改变的时候进行打印的时候才会显现出部分的指向功能
    //但既使用了()=>又配置了{deep:true}(注意由于使用()=>的时候就已经不是Proxy了)的话，则会触发底层机制，此时监视的内容包括地址对象内容、地址对象本身、地址对象的地址值，都可以起到监视的作用
  })
</script>