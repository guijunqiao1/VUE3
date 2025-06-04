import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";

//此处为选项式Api的写法(optionsAPI)
// export const useLoveTalkStore = defineStore("lovetalk",{
//   actions:{
//     async getLoveTalk(){
//       //发送请求
//       const result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");

//       let Object = {
//         id:nanoid(),
//         title:result.data.content
//       }
//       this.talkList.unshift(Object);
//     }
//   },
//   state(){
//     return {
//       talkList:JSON.parse(localStorage.getItem("talkList") as string) || []
//     }
//   }
// })


//此处为组合式Api的写法(compositionAPI)
export const useLoveTalkStore = defineStore("lovetalk",()=>{//此处为函数返回值的形式将类似setup生命周期的部分进行内容的指定返回(由于无setup语法糖故需要主动return)

  //getTalk函数相当于action中定义的一个一个的函数
  async function getLoveTalk(){
    //发送请求
    const result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");

    let Object = {
      id:nanoid(),
      title:result.data.content
    }
    this.talkList.unshift(Object);
  }

  //talkList就是state
  const talkList = JSON.parse(localStorage.getItem("talkList") as string) || [];
  
  //此处进行类setup生命周期函数体中的各个变量进行主动返回给import的变量
  return {getLoveTalk,talkList};
})