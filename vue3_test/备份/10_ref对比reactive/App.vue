<template>
  <div class="Person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为{{sum}}</h2>
    <button @click="changeSum">点我sum加1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive} from "vue"
  
  //数据
  let car = reactive({
    brand:"奔驰",
    price:100
  })
  let sum = ref(1);

  //方法
  function changePrice(){
    car.price += 10;
  }
  function changeSum(){
    sum = ref(0);
    console.log(sum);
  }
  function changeBrand(){
    car.brand = "宝马";
  }
  function changeCar(){
    // car = {
    //   brand:'奥拓',
    //   price:1,
    // }
    Object.assign(car,{
      brand:"奥托",
      price:1
    })
  }
</script>

<!-- 对本节ref与reactive的对比进行解析：
1、针对 reactive重新分配一个新对象，会失去响应式。这一句话而言，本意其实就是指的是当为上述的car变量重新赋值为对象的时候会导
致赋值赋值失败.
2、但当实际开发过程中可能确实需要这种直接将对象的数据赋值给car变量的情况，为了避免一个一个属性的赋值可以使用,则此时可以使用
Object.assign(obj1,obj2,obj3)方法，用于将obj2、obj3中的键值对内容依次赋值给obj1中,该方法的本质为将属性进行单一的依次赋值
3、对于如果car这个实例化对象的原型为ref时，则在进行类似car.value = {}的一个新的赋值的时候可以进行整体的响应式保留型的替换,
之所以和reactive原型的情况产生这样的区别的原因在于:当给value进行赋值的时候value属性会判断这个值是否为对象，从而判断是否要用
reactive去处理这个值，若是则进行和Object.assign()类似的方式进行属性批量的赋值,若不是则正常进行直接的value值的替换即可
4、类似的针对sum = ref(0)之后若同样执行sum = 对象类型的数据的情况也不行，因为同样是对sum这个实例化对象进行了重新的对象类型
的赋值，针对上述的赋值情况为对象的有sum = ref(9).--sum = 普通数据的情况也不行(会被报错)
5、同时还需要注意的是：当在函数部分中调用了sum = ref(9)的语句，则导致sum本身是作为一个新的不具备响应式的对象上了,并且并不会对
页面中呈现出来的文本内容进行确切的响应式修改，同时会导致之后对原先具有响应式的sum变量的操作失去方向
-->