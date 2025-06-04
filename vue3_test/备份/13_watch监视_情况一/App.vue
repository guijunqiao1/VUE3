<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】的数据</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from "vue";
  //数据
  let sum = ref(0);//sum本身的内容为:{RefObject,value:0}
  //方法
  function changeSum(){
    sum.value++;
  }

  //监视--此处演示的是监视ref定义的数据（注意此处所描述的ref定义的数据指的是sum而不是sum.value,
  //前者确实是ref定义的数据，而后者则为单纯的value存放的值(无Ref标识)）。
  const stopWatch = watch(sum,(newValue,oldValue)=>{//watch函数中第一个形参为监视的对象，第二个形参为回调函数;回调函数中第一个形参为
    console.log(oldValue + "变成了" + newValue);
    if(sum.value >= 10){
      stopWatch();//停止监视之后只是当前的回调函数内容发生了销毁，但是监视对象本身的内容和性质并没有发生变化
    }
    //由结果可以分析得出实际上的newValue和oldValue获取到的值为监视对象中的value属性的值
  })
  
</script>

<!-- 首先对vue2中watch进行监视的语法进行演示： 
export default {
  name:'Person',
  data(){
    return {sum:0}
  }
  watch:{  }
}--即在配置项中进行内容的设计(所谓的配置项也就是export default中出现的键值对内容)
-->

<!-- 对上述vue3中watch监视器函数的使用方法的使用进行步骤上的解析：
首先使用import将watch方法进行引入，并且执行该方法(关于该方法形参方面的东西上述描述已经提到过了就不在进行描述)此处对返回值情况以及
监视的时候对发生变化的前后值(value属性的值)内容进行操作;返回值为函数，当执行该函数则立即停止监视
-->

<!-- 需要注意的是判断sum大小的语句应该放置在监视的语句中，如果放在watch方法的外部(上方的情况)则导致stopWatch未定义的情况发生;
如果放在watch方法的外部(下方的情况)则导致程序进行一次性的执行的时候就已经进行判断了，若不是大于等于10则内容在此次遍历永远
不再执行，但是对于watch方法中的内容是每当监视对象发生改变的时候都会执行的，但是放在watch的形参回调函数中时则在每一次进行监视
对象的修改的时候都会导致判断的执行 -->