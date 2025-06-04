<template>
  <div class="Person">
    <h1>情况三：监视【reactive】定义的【对象类型】的数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changePerson">修改人物</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue';
  //数据
  let person = reactive({
    name:"zhangsan",
    age:19
  })
  //方法
  function changeAge(){
    person.age++ ;
  }
  function changeName(){
    person.name += "~";
  }
  function changePerson(){
    Object.assign(person,{name:"lisi",age:21})//此处使用了Object构造方法进行对象数据的单纯修改--注意不鞥=能直接使用person={}的语句进行对象
    //内容的修改(产生的对象类型的数据并不是响应式的内容，并且会导致原先响应式的变量丢失无法对内容进行其他方法的使用了,
    //因为不能将Proxy数据转化为单纯的对象类型的数据)，上述方法的本质为person.属性1:{}中的某个属性值进行对应的修改
    //仍然为响应式数据的修改
    //注意和原先的ref中的修改person之间的区别，其为person.value:{}的形式可以直接进行新地址对象的赋值获取
  }
  //监视
  const stopWatch = watch(person,(newValue,oldValue)=>{
    console.log(person);
    console.log(newValue);
    console.log(oldValue);
    //每个按钮都可以被监视到并执行对应的内容，原因在于监视的是Proxy对象的内容的本身
    //针对reactive响应化的数据的监视依据并不是value而是这个对象本身的内容并且newValue、oldValue、person都是改变后的同一个Proxy对象
  })//由于reactive本身具有深层响应化数据的能力，所以在设置watch方法的时候会自动将形参中的{deep:true}开启,故可完成深层的监视
</script>

<!-- 需要注意的是：newValue和oldValue存入的值为person本身(同一个地址对象)，对该地址对象的内容进行修改则会由于deep:true的自动开启
导致期中的内容发生细小的改变同样会被监视到，但是由于本身的内容并没有发生改变，所以输出的三个值是同一个地址对象(person,{Proxy,...}) -->