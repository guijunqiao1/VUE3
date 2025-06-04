<template>
  <div class="App">
    <h2>求和为{{ sum }}</h2>
    <h2>人的名字为{{ person.name }}</h2>
    <h2>人的年龄为{{ person.age }}</h2>
    <h2>汽车信息为{{ car }}</h2>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
    <button @click="add">sum值增加</button>
    <button @click="changeName">修改人的名字</button>
    <button @click="changeAge">修改人的年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" name="App" setup>
  import {ref,shallowRef,reactive,shallowReactive} from "vue";
  //数据
  let sum = ref(0);
  //进行回顾内容的实验的person数据的定义-ref:
  // let person = ref({
  //   name:"张三",
  //   age:20
  // })
  //shallowRef使用演示的person数据:
  let person = shallowRef({
    name:"张三",
    age:20
  })
  //进行回顾内容实验的car数据的定义-reactive:
  // let car = reactive({
  //   brand:"奔驰",
  //   options:{//配置
  //     color:"红色",
  //     engine:"v8"
  //   }
  // })
  //shallowReactive使用演示的car数据:
  let car = shallowReactive({
    brand:"奔驰",
    options:{//配置
      color:"红色",
      engine:"v8"
    }
  })
  console.log(person);
  console.log(car);
  //方法
  function add(){
    sum.value++;
    console.log(person);
  }
  function changeName(){
    person.value.name = "李四";
    console.log(person);
  }
  function changeAge(){
    person.value.age++;
    console.log(person);
  }
  function changePerson(){
    person.value = {
      name:"tony",
      age:20
    }
    console.log(person);
  }
  function changeBrand(){
    car.brand = "宝马";
    console.log(car);
  }
  function changeColor(){
    car.options.color = "紫色";
    console.log(car);
  } 
  function changeEngine(){
    car.options.engine = "v12";
    console.log(car);
  }

//在上述使用了shallowRef得出的结果中可以得出的结论：
//首先需要知道的是原先的ref类型的数据进行value的值修改之后的本质其实为单纯的使用针对reactive响应式数据的Object.assign方法进行value中
//的Proxy的类型对象的单纯的键值对的修改从而得以保留下响应式的特性，所以此处的shallowRef在使用.value赋值的时候则是在原先的ref的使用会自带上
//Object.assign的效果进行赋值给去掉了(因为这个效果的拥有看的是原先的RefObject对象中的value是否为Proxy对象)，所以导致赋值的内容为新的对象，并且该对象的值是在原先一样的基础上进行指定的值修改的形式，故没有了响应式
// 也可以从层级的含义上进行原理的理解最开始赋值不会将vlaue进行响应化的原因，首先shallow本意为浅层的，则只会维护person.value这一个层级，value中的内容不在使用默认的Object.assign方法进行维护了

// shallowRef对比上Ref的好处在于：
// 当需要使用到.value={}对象的整体的赋值并且不要求.value的内容保留响应式的时候可以使用shallowRef，因为对于Ref的这种的赋值的形式
// 本质上为对原先的.value中的对象中的每一个对应的属性进行逐个的key1=value1、key2=value2的操作(也就是Object.assign()方法的自动的使用)

// shallowReactive的使用效果的总结：
// 首先就算先前正常定义的reactive的对象内容，虽然第二个层级并不属于Proxy类型的对象，但是在实际进行深层的使用的时候仍然可以有响应化的效果，
//但是对于使用了shallowReactive则没有了自动的深层响应化的效果了，但是需要注意的是将上述的options直接进行={}的修改则整体上的响应式仍然存在
//，也就是使用了car.options={color:"蓝色",engine:'v11'}的格式，则页面同样会进行响应


//此处提出问题:为什么给变量直接赋对象字面量值会飘红？
// (1)只是提示的建议，不会产生实际的报错
// 为什么value直接字面量赋值之后的该vlaue仍然是Proxy类型的响应式数据，同时为什么针对相同的赋值方式为什么reactive方式的值却不是响应式的？
// (2)首先要知道的是：
// 1、针对 reactive重新分配一个新对象，会失去响应式。这一句话而言，本意其实就是指的是当为上述的car变量重新赋值为对象的时候会导
// 致赋值赋值失败.
// 2、但当实际开发过程中可能确实需要这种直接将对象的数据赋值给car变量的情况，为了避免一个一个属性的赋值可以使用,则此时可以使用
// Object.assign(obj1,obj2,obj3)方法，用于将obj2、obj3中的键值对内容依次赋值给obj1中,该方法的本质为将属性进行单一的依次赋值
// 3、对于如果car这个实例化对象的原型为ref时，则在进行类似car.value = {}的一个新的赋值的时候可以进行整体的响应式保留型的替换,
// 之所以和reactive原型的情况产生这样的区别的原因在于:当给value进行赋值的时候value属性会判断这个值是否为对象，从而判断是否要用
// reactive去处理这个值，若是则进行和Object.assign()类似的方式进行属性批量的赋值,若不是则正常进行直接的value值的替换即可


//总结：通过使用 shallowRef() 和 shallowReactive() 来绕开深度响应。浅层式 API 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，
//避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能
</script>

<style>
.App {
  padding:10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  background-color: #ddd;
}
button {
  margin:0 5px;
}
</style>