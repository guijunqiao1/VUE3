<!-- <template>
  <div class="father1">
    <div class="son1">123</div>
    <div class="son2">123</div>
    <div class="son3" ref="div1">123</div>
  </div>
  <div class="father2">
    <div class="son11">123</div>
    <div class="son22">3</div>
    <div class="son33" ref="div2">123</div>
  </div>
</template>

<script lang="ts" name="App" setup>
  import { onMounted } from "vue";
  import { ref } from "vue";
  //数据
  // const div = ref();//先将div标签对象进行获取(son3)
  // //结合原生DOM获取到son22标签，观察是否正常
  // onMounted(()=>{
  //   const father = div.value.parentNode.nextElementSibling.children[1];
  //   console.log(father.innerHTML);
  // })
  const div1 = ref();//方式一
  console.log(div1);
  console.log(div1.value);
  //首先对上述在setup生命周期函数中执行的div1标签的获取操作之后将div1以及div1.value进行分别的打印出现前者能够正常进行显示
  //而后者却显示undefined的原因进行解释：首先对于setup中设置的div1本质上是：ref 被 Vue 自动关联到模板中的 ref 属性的原理获取到的
  //RefObject对象，由于div1.value的本质为DOM，则无法进行正常的访问(但在组件挂载之后才可进行div1.value的访问了)


  onMounted(()=>{
    const div2 = ref();//方式二
    console.log(div2);
    //此处输出的结果为undefined的原因在于前者本身的内容虽然说可能发生了其他的改变，但是对于onMounted()方法而言在执行
    //const div2 = ref()这个语句是针对当前的onMounted环境下进行RefObject对象的单独的创建而不是和模版进行对应的ref属性绑定
    //(只有setup中才享受此范围效应)
  })
</script> 

<style>
</style>


 对：
1、请问为什么在setup()中使用ref()方法可以获取到标签对象(广义上)而在onMounted()方法中却不能获取到标签对象;
并且在setup()中不能操作DOM而在onMounted()中却能操作DOM？
答：ref()获取到的对象是一个虚影，其中的的.value索引到的内容是具体的DOM对象，并且DOM对象是这个虚影所对应的标准在经过挂载之后的一种完全体是吗
问题以及：
2、上述程序设计的方式一和方式二分别表示的是两种不同的赋值方式，那么请问为什么方式一可以正常将标签对象元素进行获取而方式二却不行？
问题有深刻的区分认知。 
--> 