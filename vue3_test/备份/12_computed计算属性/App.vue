<!-- 需求：要求填充到span中的首字母大写 -->
<template>
  <div class="Person">
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span>
    <button @click="changefullName">修改全名为lisi</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref,computed } from 'vue';
  let firstname = ref("zhang");
  let lastname = ref("san");

  //这么定义的计算属性是只读的--即无法对该属性的值进行修改操作,而所谓的修改操作指的是在script中进行显示的fullName=某个值的形式才能被称之为
  //修改，而此处的动态返回修改后的值的类型并没有破坏其中的不可修改的原则，这不是修改操作(本质其实是因为仅计算了一次--除去赋值的第一次)
  // let fullName = computed(()=>{
  //   console.log(1);//此处console.log方法用于检测当前方法调用了几次
  //   return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value;
  // });

  //这么定义的计算属性是即可读又可以修改的
  let fullName = computed({
    get(){//该部分用于设置返回给fullName变量的内容--Ref类型的对象其中的value值为下方返回值的对象
      return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value;
    },
    set(val){//该部分用于设置对fullNameRef对象中的value值进行修改的时候的内容的执行--需要注意的是set方法中的形参为截止之前进行修改的数据的内容（即捕捉到的修改的内容，还没修改成功）
      //即lisi，后续对
      const [str1,str2] = val.split("-");
      firstname.value = str1;
      lastname.value = str2;
    }
  });
  function changefullName(){
    fullName.value = "Li-si";//需要注意的是每次对fullName.vlaue进行修改并不会对实际上方{{fullName}}的值进行动态的修改，就算本质为
    //响应式数据类型也不行，因为fullName已经成为了Computed类型的Ref对象，所以在对fullName.value进行修改的时候系统会自动将修改截止，
    //并且后续执行set(){}模块部分中的内容--可通过在set(){}模块中对fullName.value进行修改达到对实际上template标签的{{fullName}}
    //进行修改的目的
  }
</script>
<!-- 此处需要注意的是：之所以对fullName.value进行修改无法达到总名称修改的目的，而使用firstname、lastname进行直接的修改达到总
名称的修改的目的的原因在于：直接对fullName.value进行修改会直接报错，并且由于先前已经在对fullName.value的值进行修改并被截胡的
时候就已经明确指明了无法对该值进行直接的修改(这个性质是不可控的，因为这个性质是产生set(){}方法执行的原因),若需要对总名称进行修改
则需要对firstname、lastname进行修改，并且迫使computed工作(执行的是get(){}模块的内容)执行程序中自动的fullName对象内容的重新获取(并且在该对象中的value属性中
存储的值即为computed方法返回的字符串内容)
-->

<style>
  .Person{
    background-color: skyblue;
    width: 100%;
    height: 70px;
    padding: 10px;
  }
</style>

<!-- 对上述的内容的设计中的输入框标签中的value属性进行解析(解释废用的原因)：
<template>
  <div class="Person">
    姓：<input type="text" v-bind:value="firstname"><br>
    名：<input type="text" v-bind:value="lastname"><br>
    全名：<span>??-??</span>
  </div>
</template>
此处进行v-bind标识的使用用于直接将script代码部分利用于解析html部分的内容进行动态数据填充功能的实现;但是此方法的弊端为仅将数据填充到了
页面上，但是实际并不能动态的获取到此时页面上呈现的value的内容，进而无法获取到正确的全名并完成填充功能的实现
但是这样填充上的value内容会导致仅在呈现在页面上的时候是正常进行显示的，但是在实际发生input内容的修改的时候，应该要满足将
源代码中的标签内容进行动态的修改的效果--也就是firstname、lastname进行动态修改(双端响应的实现),从而达到完成最终全名的动态获取的效果
--针对上述问题故使用了v-model属性进行默认值的设置，并且使用了该属性之后，若填充上的默认值为JS部分的变量，则在后续的修改(在页面端)该变量
的时候也会动态对firstname、lastname变量的内容进行修改
-->

<!-- 对computed方法进行解析：
将该方法的使用和直接使用
let fullName = function(){
    return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value;
}
进行对比，虽然都是直接返回了值的内容，但是computed只会执行一次，并且将fullName的内容进行使用，而直接调用函数(立即执行函数)
则在每一次嵌入到{{fullName}}中的时候都会进行一次计算--即没有缓存
-->

<!-- 注意slice方法为针对字符串的方法形参表示将除了形参字符(形参只有一个的情况下)进行截断，并且将剩余部分作为返回值进行操作 -->
<!-- 若形参有两个，则表示将指定位置的（a~b）之间(不含b)的字符串进行获取并返回操作 -->


<!-- 对上述的computed方法的构建可修改属性的情况进行分析：
首先需要知道的是该方法的形参可以是对象类型也可以是字符串类型的值，若为字符串类型的值表示的是直接将该内容作为计算属性用于读取;
若为对象类型，则需要向该对象中填充上get方法和set方法的定义(由于对象中的内容的定义并不需要使用关键字，故不需要使用function进行声明)

该方法的形参为回调函数，并且返回值为Ref响应式类型的对象,该对象中的value属性存放的内容即为get(){}模块中return返回过来的内容
首先将返回给computed函数对象的内容书写在get(){}部分中，并且需要和set(){}部分同时存在，set(){}部分用于书写上其余的文本内容
-->


<!-- 对toRef与toRefs的使用进一步进行总结：--需要了解解构赋值的本质其实就已经确定了变量名就是属性名的情况
1、toRef的形参为非对象类型的值的时候，返回的refObj对象的value内容为直接的对应的文本（并且没有Proxy参与）
但当形参为对象类型的时候，若该对象本身为Proxy类型的对象，则转化后的value中的Proxy和先前的Proxy对象互通
2、并且toRef不可使用{}解构赋值;
3、toRefs对于解构赋值的变量最终产生的值的形式为{RefObj,value:该属性对应的值}  -->

<!-- 同时需要注意的是computed函数返回的值为：
ref类型的对象内容，并且计算结果实际返回在这个ref对象框架中的value属性中
-->