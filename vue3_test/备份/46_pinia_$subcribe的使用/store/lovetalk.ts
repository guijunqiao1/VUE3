import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";

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
      //首先判断本地浏览器中是否可以取得出talkList列表的内容，若可以则取出并完成库的赋值，若不可以则进行库的talkList数据的初始化(空数组,每次用户主动点击按钮则向pinia的store中对应的数据添加上一个对象元素)

      //此处将本地talkList数据作为赋值的依据
      talkList:JSON.parse(localStorage.getItem("talkList") as string) || [] //将原先存入到本地浏览器中的JSON格式的字符串转化为JSON格式的对象
      //上述末尾的as string表示的是ts中的断言语法(可以理解为注释)
    }
  }
})
