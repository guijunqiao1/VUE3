import {defineStore} from "pinia";
import { reactive } from "vue";
export const useCountStore = defineStore("count",{
  state(){
    return {
      jiezhi:reactive([{
        name:"",
        age:0
      }])//首先定义一个空响应式对象数组，后续对介质内容进行填充的时候直接使用defineStore().unshift--或者pop方法将介质元素填充即可

      }
  }
})

//需要注意的是由于pinia中的库作为组件的介质本身的时候其实是需要进行store文件夹中的ts文件名的区分--用于显示当前的库存储的主要的数据内容，
//,同时当前的库存储数据的内容应当对应格式和在外部传入信息的文件中提供的信息的格式一致，否则飘红