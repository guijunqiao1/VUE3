<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" name="LoveTalk" setup>
  import { reactive } from 'vue';
  import axios from 'axios';
  import { nanoid } from 'nanoid';
  //数据
  let talkList = reactive([
    {id:"jlajkd01",title:"今天你有点怪,哪里怪？怪可爱的"},
    {id:"jlajkd02",title:"草莓、蓝莓、蔓越莓，今天你想我了没?"},
    {id:"jlajkd03",title:"心里给你留了一块地，我的死心塌地"}
  ])
  //方法
  async function getLoveTalk(){
    //发送请求
    const result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");//该方法用于向指定url发送GET请求,并且响应的结果通过
    //使用变量直接接收，但是要想接收的到，则还需要在该方法前面加上await的前缀关键词并且整个函数的定义的function的前方也需要加上async的前缀关键词

    //但是要注意该方法获取的响应体内容中是被封装到对象中的data属性中的(使用content索引则是获取到准确的随机且不重复的土味情话的内容),并且需要
    //该方法获取到的被封装到data属性中的对象的内容根据响应体的不同会有不同的键值对--例如hook自定义章节中则是狗响应体内容，此处为土味情话的响应体内容

    //把请求过来的结果包装成一个对象--需要准备上id的随机生成方法(nanoid模块)
    let Object = {
      id:nanoid(),
      title:result.data.content
    }
    //向着当前的talkList数组中添加元素
    talkList.unshift(Object);//unshift为向数组的头部填充元素的方法

    //又由于talkList本质上为Proxy类型的响应式数组类型的值，则当他发生改变的时候，对应的template中的相关文本则根据他的修改进行重新加载
  }
  
</script>

<style>
  .talk {
    background-color: orange;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button{
    margin:0 5px;
    height:25px;
  }
</style>

<!-- 对上述使用result进行土味情话的获取进行深层次的拓展： 
也可以使用let {data:{content:title}} = await axios.get("...");进行title属性的初始化，原理是整个get方法的返回值为对象类型
故先使用{}进行data键值对的包裹，同时data属性本质也是对象类型的值，故需要使用{}进行data的值的包裹，同时使用了content进行索引到title
的操作(由于content的值不是对象类型，故不需要使用{}包裹上content的值)
-->
