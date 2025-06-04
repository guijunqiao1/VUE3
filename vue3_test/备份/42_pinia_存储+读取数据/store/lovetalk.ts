import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLoveTalkStore = defineStore("lovetalk",{
  //真正存储数据的地方
  state(){
    return {
      talkList:reactive([
        {id:"jlajkd01",title:"今天你有点怪,哪里怪？怪可爱的"},
        {id:"jlajkd02",title:"草莓、蓝莓、蔓越莓，今天你想我了没?"},
        {id:"jlajkd03",title:"心里给你留了一块地，我的死心塌地"}
      ])
    }
  }
})
