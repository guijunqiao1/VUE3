// 1. 概念：当state中的数据，需要经过处理后再使用时，可以使用getters配置。
// 2. 追加getters配置。

import {defineStore} from "pinia";
export const useCountStore = defineStore("count",{
  actions:{
    increment(n:number){
      console.log("increment被调用了");
      this.sum +=n;
    },
    decrement(n:number){
      console.log("decrement被调用了");
      this.sum -=n;
    }
  },
  state(){
    return {
      sum:6,
      school:"atguigu",
      address:"宏福科技园"
    }
  },
  getters:{
    bigSum(state){
      return state.sum * 10;
    },
    upperSchool(state){
      console.log("@@@@@!!!!!",this);//此处的this指向仍然是store对象
      return state.school.toUpperCase();//对toUpperCase方法进行解释说明，将原先的字符文本转化为大写(若形参为空则表示将所有的字符文本进行大写转换的操作)
    }
  }
})

//上述的getters中定义的方法的书写的形式还可以是：
// getters:{
//   bigSum: state=>state.sum * 10,
//   upperSchool: state=>state.school.toUpperCase(),
// }

// 或者是：
// getters:{
//   bigSum: state=>state.sum * 10,
//   upperSchool():string{//此处使用string的注释的作用是为this.school的类型进行指定，防止当前方法的位置飘红
//     return this.school.toUpperCase();
//  } ,
// }--即如果不传入参数的话则不能使用箭头函数的方式，并且通过this指向的是store对象进行直接的数据的访问的操作

//后续在vue文件中进行getter转化后的内容的获取的话则正常进行使用{}解构赋值的方式进行对应名称的getters函数名中的内容的获取即可完成