import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

//此处为选项式Api的写法(optionsAPI)
export const useLoveTalkStore = defineStore("lovetalk",{
  actions:{
    async getLoveTalk(){
      //发送请求
      const result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");

      let Object = {
        id:nanoid(),
        title:result.data.content
      }
      this.talkList.unshift(Object);
    }
  },
  state(){
    return {
      talkList:JSON.parse(localStorage.getItem("talkList") as string) || []
    }
  }
})