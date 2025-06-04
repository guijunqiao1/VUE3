import {ref,reactive,onMounted} from "vue";
import axios from "axios";
export default function(){
  //数据
  let dogList = reactive([""])
  //此处使用hooks进行设置的sum数据和sum数据对应的增加的方法进行封装（dogList和getDog方法进行封装）,这样的归类封装和之前的
  //setup语法糖的作用类似，可以在定义某个函数的同时声明某个变量并对该变量进行操作(也是归类的思想,我用什么就定义什么变量)
  //
  //方法
  async function getDog(){
    try{
      let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random");//该方法用于向指定url发送GET请求,并且响应的结果通过
      //使用变量直接接收，但是要想接收的到，则还需要在该方法前面加上await的前缀关键词并且整个函数的定义的function的前方也需要加上async的前缀关键词
      console.log(result.data.message);//但是要注意该方法获取的响应体内容中是被封装到对象中的data属性中的(使用message索引则是获取到准确的url地址)
      //向原先的狗列表添加上数组元素
      dogList.push(result.data.message);//该方法执行不报错的前提是dogList不为[null]的形式(即至少都要是[""])
    }catch(error){//error为错误对象，其中的某些属性带有详细信息的解释放置在控制台中
      alert(error);//NewworkError
    }
  }
  //向外部提供实际有效内容
  return {dogList,getDog};
}

