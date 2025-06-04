<template>
  <div class="Person">
    <h1>情况二：监视【ref】定义的【对象类型】的数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人物</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from "vue";
  //数据
  let person = ref({name:"zhangsan",age:18})
  //方法
  function changeAge(){
    person.value.age ++;
  }
  function changeName(){
    person.value.name += "~";
  }
  function changePerson(){
    person.value = {//如果为person本身进行赋值则会像以前一样报错
      name:'lisi',
      age:21
    }
  }
  //监视person对象(源类型为对象类型的ref类型对象)--监视【ref】定义的【对象类型】的数据，监视的是对象地址值(原因在于
  //第一个形参位置为Ref化的数据，但是回调函数的执行看的是第一个形参位置上的内容中的.value属性值是否发生明确的改变，若是
  //则执行回调函数反之则不执行，同时需要注意的是回调函数中的形参newValue、oldValue的值就是触发监视条件的.value的值，而针对
  //ref化的对象类型的数据的情况则本质上传递的value是一个地址(因为是对象))
  const stopWatch = watch(person,(newValue,oldValue)=>{
    console.log(person.value);//本质为对象，进行操作的时候为地址值，但当打印的时候则是对象值的内容
    console.log(newValue);
    console.log(oldValue);
    // if(){
    //   stopWatch();
    // }
  },{deep:true});//当在第三个参数配置对象中添加上了immdiate:true(默认为false)则在网页进行呈现的时候立即执行一次
  //(无论监视对象的.value发生了改变与否)

</script>

<!-- 此处在watch函数的第三个形参位置上设置了{deep:true}使得监视的对象的内容如果为地址值的情况则程序自动进行指向，并且对指向的
值进行内容是否发生改变的判断 -->

<!-- 对于上述的点击不同按钮从而导致监视对象发生改变但是产生的数据语句的内容的规律不同的现象进行解释:
首先person.value和监视内容执行的newValue是等价的，但是当点击changeName/changeAge的时候则对于person.value、newValue、
oldValue完全相同的特殊情况进行解释：由于使用了deep:true使得当前的监视代码得以执行(可以监视到地址指向的“内容”是否发生了改变)，
但是newValue和oldValue本质存放的还是value的值(即对象的地址值)，所以都是作为最新的值(进行打印的时候则是直接将指向的对象内容进行
输出即可)
同时对当点击changePerson的时候对于person.value、newValue、oldValue前两者相同(逻辑上述已经讲了)，但是和oldValue是不同的
特殊情况进行解释：由于该修改导致地址本质发生了改变，则oldValue本质为老地址对象，newValue和person.value都是新的修改后的地址对象
(所以产生了这样的差异)
-->


<!-- 对以上watch方法的形参(常用的)进行总结：
第一个参数：被监视的数据
第二个参数：监视的回调
第三个参数：配置对象（deep、immdiate等等.......）
-->

