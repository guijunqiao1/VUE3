<!-- //首先所谓的编程式路由导航即指脱离<RouteLink>实现路由的切换、和页面的跳转 --本质上<RouteLink>组件在整个项目进行之后会变成a标签 -->

<!-- //首先介绍useRoute方法和useRouter方法之间的区别，前者形参为空，并且返回值为当前url中的路由对象进行获取(并且该对象是Proxy类型的响应式对象)，
而对于之前学的路由的props传参中的函数形式中的props函数的形参对象则是当前url中的路由对象(非响应式类型) -->

<!-- 下方对useRouter方法进行解释：
import {useRouter} from "vue-Router";
import {onMounted} from "vue";

const router = useRouter();

onMounted(()=>{
  setTimeout(()=>{
    router.push('/news');//使用该方式进行路由的跳转本质为将当前组件切换为指定的路由组件,并且携带上的组件的属性为push(保留历史记录)
  },3000)
})
//对router.push方法中形参的写法进行补充：针对RouteLink标签中的to属性有什么指定路由的写法，则该形参也可以怎么写，只不过是此处为()的、
环境，故理解为已经是:to=""的情况了

-->

<!-- 此处对useRouter方法的使用进行进一步的提出需求：设计按钮标签，当点击按钮的时候使得发生路由跳转 -->
<!-- 伪代码进行书写： -->
<!-- <template> 
  <div class="person">
    <button @click="href">跳转</button>
  </div>
</template>

<script>
  import { Interface } from 'readline';
  import { useRouter } from 'vue-router';
  //数据
  const router = useRouter();

  //此处进行路由(组件的)访问的函数内容的接口设计
  Interface NewsInter{
    id:string,
    title:string,
    content:string
  }

  //方法--注意下方的形参使用额外的接口的语法检查，意图在下方对形参的各个属性进行使用时出现的属性名错误等情况的飘红提示的呈现
  function href(item:NewsInter){//注意item参数是在实际的template提供的item的环境下进行的参数的传递也就是href(item)的形式
    router.push({
      name:"xiang",
      query:{
        id:item.id,
        title:item.title,
        content:item.content,
        //可在路由参数中传递自定义标记
        type:'reference'
      }
    });
  }
</script> -->

<!-- 使用该方法进行query以及params参数的传递是通过:to的对象的形式将router.push进行()中的赋值的 -->

<!-- 同时需要注意的是对于路由器配置文件(Router文件夹下的index.ts文件)中的参数(例如query、params)的匹配方式为/：/：的形式，
而对于访问路由的RouteLink标签的to属性而言(或者当前的router.push方法而言)则在匹配路由的时候本质上to属性的全部内容都是
用于匹配上对应路由器中设置的路由的，但是在实际的参数的设置中不仅匹配上/：/：的设计，同时进行了对应参数的值的传递 -->