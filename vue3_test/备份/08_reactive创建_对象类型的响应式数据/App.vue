<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车价值{{car.price}}</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <div>测试:{{obj.a.b.c}}</div>
    <button @click="changeTest">修改测试数据</button>
  </div>
</template>

<script setup lang="ts" name = "Person">
  import { reactive } from 'vue';
  //数据
  let car = reactive({
    brand:'奔驰',
    price:100,
  })

  //在上述基本对象的演示的基础上在下方进行特殊的对象进行演示(数组)
  let games = reactive([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
  ])

  //设置一个深层级的对象内容用于验证：reactive定义的响应式数据是“深层次”的
  let obj = reactive({
    a:{
      b:{
        c:666,
      }
    }
  })
  
  function changePrice(){
    car.price += 10;
    console.log(car.price);
  }
  function changeFirstGame(){
    games[0].name = "流星蝴蝶剑";//注意此处的game已经成为了实例化对象(Proxy原型),
    //故对该实例化对象的内容进行修改可以直接将内容进行响应式的修改并完成重渲染
  }
  function changeTest(){
    obj.a.b.c += 10;
  }
</script>

<!-- 首先此处将基本数据类型和对象类型的数据转变为响应式数据之间的区别进行总结： 
1、首先需要知道的是进行ref或者reactive构造函数进行实例化的时候的本质其实就是将该变量
2、首先使用了ref对基本数据类型转换为响应式数据则原先的实例化对象(name)则会变为{}单纯的ref构造函数下的一个对象，
其原型为ref但是本身的名称即为name;但若是使用了reactive对原先的对象类型转化为响应式数据则原先实例化对象name则
会变为{}由Proxy构造函数下的一个对象，其原型为Proxy，但是本身的名称即为name
3、对上述的Proxy进行解释说明：是JS底层的一个函数(此处相对于name为构造函数)
4、上述产生的两个对象之间的区别在于，前者产生的对象的内容是单纯的针对这个基本数据类型中原先存储的值的属性value
用于开发使用，但是后者产生的对象的内容则是在Proxy这个构造函数的基础上进行内容的转化之后的一个属性为原先的值的对象内容的对象
,只要使用一次reactive就可以将原先对象(car)中所有的属性都变为响应式数据
5、而后者之所以能够将对象值转化为响应式数据的原因在于有Proxy构造函数实例化出来的对象的内容在进行渲染的时候是被当做响应式数据
进行相同的处理从而达到响应式数据的设计
6、需要注意的是使用reactive进行实例化的时候并不是使用字符串将形参进行包裹的，而是直接将{}对象内容进行包裹. 
7、此处对上述的template标签中的标签中使用的v-for进行解析：首先此为vue2中的批量内容的写入的语法，和Node.js中ejs文件中的arr.foreach
有相似之处，用于将当前的文本进行批量操作的实现;
8、此处对上述的vue2中的v-for语法进行解析：
<li v-for="g in games" :key="g.id"></li>结构中首先g in games表示的每一次遍历执行相同的内容，g表示item，而games即为array
，同时每一次渲染的时候必须在当前的标签上加上key值，用于设置每次遍历的li标签呈现在页面上的表示，此处使用了g.id进行直接的标识的填充，
需要注意的是g为数组中的{id:'ahsgdyfa01',name:'英雄联盟'}，使用.id进行索引之后即可直接对标识内容直接进行获取,由于直接的文本输入(g.id)是无法对
内容解析的，所以使用:key的形式将语法内容进行解析并完成对应内容的填充的实现(针对属性值的语法查找,注意和在文本中使用{{}}进行语法查找之间单独区别)
;同时每一次的内容的遍历的内容由标签中的文本进行决定，和v-for的设置无关;v-for仅提供了遍历的机会，而文本则是由标签中设置的内容进行决定;设置id是
为了寻找到每一次遍历的标签的位置，便于DOM的元素查找. 
9、上述obj对象的设置是为了检验：reactive定义的响应式数据是“深层次”的，而从检验结果上看可以得出：
针对原先obj就算不是一个层级的对象类型的对象类型的数据而言，使用了reactive进行实例化之后会将其任然对应的转化为Proxy进行对应内容的映射完成实际内容的动态
且深层的响应的实现
-->
