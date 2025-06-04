<template>
  <div class="Person">
    <h1>情况五：监视上述的多个数据</h1>
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

<script lang="ts" setup>
  import { reactive,watch } from 'vue';
  //数据
  let person = reactive({
    name:"张三",
    age:19,
    car:{
      c1:"车1",
      c2:"车2"
    }
  })
  //方法
  function changeAge(){
    person.age++;
  }
  function changeC1(){
    person.car.c1 = "奔驰";
  }
  function changeC2(){
    person.car.c2 = "宝马";
  }
  function changeCar(){
    person.car = {
      c1:"奥迪",
      c2:"比亚迪"
    }
  }
  function changeName(){
    person.name += "~";
  }
  //监视，情况五：监视上述的多个数据
  const stopWatch = watch([()=>person.name,()=>person.car.c1],(newValue,oldValue)=>{
    console.log("数组中的数据发生了改变");
    console.log(newValue);//本质上newValue、oldValue中存入的值为数组，发生修改前的数组和发生修改后的数组内容(响应的内容与之对应)
    console.log(oldValue);
  })

</script>