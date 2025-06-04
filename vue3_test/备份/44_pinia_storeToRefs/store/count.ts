
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
  }
})
