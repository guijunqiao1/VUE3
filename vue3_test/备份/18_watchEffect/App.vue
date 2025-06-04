<template>
  <div class="Person">
    <h2>需求：当水温达到50度或水位达到80cm时，那么就像服务器发送请求</h2>
    <h2>当前水温为：{{Temp}} T</h2>
    <h2>当前水位为：{{Height}} cm</h2>
    <button @click="changeTemp">点我水温加10</button>
    <button @click="changeHeight">点我水位加10</button>
  </div>
</template>

<script lang="ts" setup name="person">
  import {ref,watch,watchEffect} from "vue"
  //数据
  let Temp = ref(10);
  let Height = ref(0);
  //方法
  function changeTemp(){
    Temp.value+=10;
  }
  function changeHeight(){
    Height.value+=10;
  }
  // //监视--watch实现
  // const stopWatch = watch([Temp,Height],(newValue,oldValue)=>{
  //   //模拟发送请求的语句--将达到要求后的数组中的水温和水位分别打印
  //   let [newTemp,newHeight] = newValue;
  //   let [oldTemp,oldHeight] = oldValue;
  //   if(Temp.value>=50||Height.value>=80){
  //     console.log(newHeight);
  //     console.log(oldHeight);
  //     console.log(newTemp);
  //     console.log(oldTemp);
  //     stopWatch();
  //   }
  // })

  // 监视--watchEffect实现--可以在粗略的环境下进行使用(并且无法直接对oldValue进行获取)
  const stopWatch = watchEffect(()=>{
    if(Temp.value>=50||Height.value>=80){
      console.log("服务发送请求");
    }
  })
</script>

<!-- watchEffect和watch之间的区别:
1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同
2. watch：要明确指出监视的数据
3. watchEffect：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。
4. watchEffect相当于自带了{immediate:true}的配置类似，当程序运行的时候立即执行一次监视体内容；
-->