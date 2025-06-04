<template>
  <div class="Person">
    <!-- <h2>姓名：{{name}}</h2> -->
    <!-- <h2>年龄：{{age}}</h2> -->
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,toRefs,toRef} from "vue"

  //数据
  let person = reactive({
    name:"张三",
    age:18,
  })
  //解构赋值获取到变量
  let {name,age} = toRefs(person);
  console.log(name);
  //方法
  function changeAge(){
  }
  function changeName(){
}
</script>

<!-- 对本节中部分特殊代码进行解析：
1、首先在解构赋值结构中的内容中的变量并不是正常的具有响应式的数据，因为设置了响应式的只有person这个对象变量,上述解构赋值仅用于
单纯的变量的赋值(初始化)
2、在使用了toRefs(因为是解构赋值，所以是该批量的方法)方法之后，使得该属性变为新的ref方法使用过后的响应式数据了(即该属性此时存储的
值为对象类型了);注意此处的ref方式和原先的ref转化之间的区别，原先直接使用let name = ref(person)则直接将该属性变为一个响应式对象(存储着
对象值的);而此处的toref的使用需要搭配上{}进行解构赋值进而完成一个变量变为响应式单纯的数据(即value中存储的不是对象而是单纯的对应上解构的值)
3、注意使用了toRef可以将由reactive转化为ref的数据
4、同时还需要注意的是：当使用了toRef的赋值的形式，若为解构赋值的形式，则原先的value和后续的变量中对应的value的文本内容是互通的，即在后续
使用name.value进行响应式内容修改的时候，在Person中的value对应的属性内容会被进行相同的操作;总而言之就是使用toRef返回的值为地址值，而
直接使用变量赋值的方式进行值的获取为单纯值(即基本数据类型的意思)的赋值的形式并且没有value的参与故无法起到响应的效果
5、针对使用toRef不使用解构赋值的形式进行响应式数据的设置的情况进行分析：此方式会将原先reactive响应化的对象中的属性内容存放在
当前变量中创建的对象框架{}中，并且每一个属性的值本身为Ref响应化的对象内容(value中存放的内容即为正常的数据)
6、针对toRef的形参并不是reactive响应化之后的对象的情况而言:接受返回值的变量存入的值任然是上方对应的情况，但是在控制台进行输出的时候
则会发出对应的"建议"警告;


首先对上述问题进行理清的前提需要理解一下的问题：
1、toRef、toRefs方法的形参应该分别有哪些:--其中第二个==>用于表示当前Person1存储的值打印出来的样子
前置条件此时person已经是reactive响应化后的变量了
toRef：操作对象,对象属性 ==>比如let Person1 = toRef(person,"name");==>{RefObejct,value:原先name属性对应的值}--和正常的let Person1 = ref(原先name属性对应的值)等价
toRefs：操作对象 ==>比如let Person1 = toRefs(person);==>{age,name}(并且其中的age、name分别为Ref响应化类型的属性)

2、当toRef值给出了操作对象的时候，则接受返回值的变量中存入的内容为：{RefObje,value:Proxy(Object)}

3、对于解构赋值进行响应式数据的接受的情况进行分析：
toRef：let {Person1} = toRef(person)--该情况报错
toRef：let {Person1} = toRef(person,"name")==>{RefObejct,value:"name属性对应的值"}
toRefs:let {Person1} = toRefs(person)==>{RefObject,value:"Person1属性对应的值"}

4、之所以会产生创建的Ref对象中的value和原先的Reactive对象中的数据互通的原因在于:
使用了to方法的返回值中的对象中的value属性中存入的对象并不是单纯的对象而是Proxy类型的对象，当在外部使用Person1.value的时候进行
内部的值的修改会导致原先的reactive响应式类型的对象中的value对应该属性的内容发生相同的变化--本质为地址传递的原因

上述person对象无论是不是reactive响应化后的对象都是一样的结果，但是是则不会警告
-->
