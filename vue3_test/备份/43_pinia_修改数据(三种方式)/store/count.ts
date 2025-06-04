
import {defineStore} from "pinia";
export const useCountStore = defineStore("count",{
  //actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(n:any){
      console.log("increment被调用了",this);//注意当前函数体中的this指向的是整个defineStore返回值的函数对象的返回值对象(Proxy对象)--说白了this就是当前的store
      //修改数据
      this.sum +=n;
    }
  },
  state(){
    return {
      sum:6,
      school:"atguigu",
      address:"宏福科技园"
    }
  }
})

//展示了三种pinia库中的数据修改的方式之后更加明确了defineStore方法但会的函数方法的对象是装载了各种函数体内容(同时也是外部的defineStore函数体)的各种内容方法的对象

