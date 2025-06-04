<template>
  <div class="content1">
    <!-- 上半部分 -->
    <div class="top_part">
      <input type="text" v-model="id" placeholder="用户名">
      <select name="标记" id="remarks" v-model="remarks">
        <option value="man">true</option>
        <option value="woman">false</option>
      </select>
      <input type="text" v-model="device_name" placeholder="设备名称">
      <button class="Big"></button>
      <button class="search">查询</button>
      <button class="add" @click="add_td($event)">新增</button>
      <button class="delete">删除</button>
    </div>

    <!-- 下半部分--表格部分 -->
    <!-- <div class="bottom_part">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>设备名称</th>
          <th>标记</th>
          <th>创建时间</th>
          <th>编号</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    </div> -->
  </div>
</template>

<script name="Device" setup lang="ts">
  import { onMounted } from "vue";
  import { nanoid } from "nanoid";
  import { ref } from "vue";
  import axios from "axios";
  //数据
  let id = ref();
  let device_name = ref();
  let remarks = ref('true');

  //方法
  let add_td =(value)=>{};

  //在onMounted方法中定义add_td方法便于后续使用DOM进行tbody标签中的tr、td标签的创建以及添加操作
  onMounted(()=>{
    //需要注意的是下方的axios方法的异步处理方式中为针对匿名函数的处理方式
    add_td = async (value) => {//使用axios组件中的axios方法，用于像服务端(server端)中发送请求，用于新增新的数据库中的tr内容
      //此处尝试利用axios方法将username、part、genderr输入框中内容作为query参数，便于发送请求时候的Node.js中的内容解析并且
      //判断是否进行数据库内容添加以及是否进行响应值的内容的返回，若为空则表示数据库中已经存在该tr故不再执行后续的DOM中的标签的添加操作

      //当点击按钮的时候(触发事件的时候)发送请求
      const result = await axios.get('http://127.0.0.1:9000/t_device?id=' + id.value + '&&device_name=' + device_name.value + "&&remarks=" + remarks.value);
      //此处需要注意的是axios方法的返回值为axiosResponse(前端响应式对象),其中的data属性才为后端中res.send()、res.end()、res.render()的形参中包裹的内容传递过来的值
      if(result.data==='ok'){
        //在允许进行新增的情况下进行内容的填充
        const tr = document.createElement("tr");
        //提前进行tbody对象的获取
        const tbody = document.querySelector("tbody");

        //获取到创建时间
        const time = new Date();
        const ctime = time.toLocaleString();

        for(let i=0;i<6;i++){
          const td = document.createElement("td");
          if(i===0){
            td.innerHTML = id.value;
            tr.appendChild(td);
          }
          else if(i===1){
            td.innerHTML = device_name.value;
            tr.appendChild(td);
          }
          else if(i===2){
            td.innerHTML = remarks.value;
            tr.appendChild(td);
          }
          else if(i===3){
            td.innerHTML = ctime;
            tr.appendChild(td);
          }
          else if(i===4){
            td.innerHTML = nanoid();
            tr.appendChild(td);
          }
          else{//进行修改和删除标签的创建
            const change_a = document.createElement("a");
            const delete_a = document.createElement("a");
            td.appendChild(change_a);
            td.appendChild(delete_a);
            tr.appendChild(td);
            //对当前已经进行change_a、delete_a标签创建的情况下进行数据库事件操作的事件绑定--通过事件委托的方式进行父元素的位置的
            //传递
            tr.addEventListener("click",async (e)=>{
              //判断当前点击的具体标签是否为change_a，如果是则正常进行数据库内容的修改操作的执行,最后在进行内容的响应式渲染
              if(e.target === change_a){//进行数据库内容的修改操作
                //先找出当前的tr所在位置的信息，后进行对应的sxios方法的对应query参数的位置信息的传递即可

                const result = await axios("http://127.0.0.1:9000/t_device?id=" + id.value + '&&device_name=' + device_name.value + 'remarks' + remarks.value);
                //判断返回值类型
                if(result.data === 'ok'){//当允许进行内容的修改的时候
                  //通过DOM利用当前的e.target(a标签)进行整个值的修改
                  if(change_a.parentNode!==null&&change_a.parentNode.parentNode!==null){//使用这种方式能够避免下方的语句中发生飘红(注意一定要是显式的不为空的形式(!==null)才能起效)
                    change_a.parentNode.parentNode.children[1].innerHTML = device_name.value;
                    change_a.parentNode.parentNode.children[2].innerHTML = remarks.value;
                  }
                }
                else if(result.data === 'no_id')
                  alert("没有修改对应内容的匹配id");
                else if(result.data === 'least_one')
                  alert("至少一个非id内容的输入框不为空才能进行修改");
              }
            })
            tr.addEventListener("click",async (e)=>{
              //判断当前点击的具体标签是否为delete_a，如果是则正常进行数据库对应的tr位置的行内容的删除,最后再进行页面的内容重渲染
              if(e.target === delete_a){//进行数据库内容的删除操作
                //先找出当前的tr所在位置的信息(也就是id值)，后进行对应的sxios方法的对应query参数的位置信息的传递即可
                const del_id = delete_a.parentElement?.parentElement?.children[0];
                const result = await axios("http://127.0.0.1:9000/t_device/" + del_id);
                if(result.data==='no_id')
                  alert("没有对应id的字段故无法完成删除");
                else if(result.data==='no_conente')
                  alert("id没有对应字段，故无法完成删除");
              }
            })
          }
        }
        //当前点击事件执行完毕之后进行tr的填充
        if(tbody!==null)
          tbody.appendChild(tr);
      }
      else if(result.data==='have')
        //当数据库中已经存在该数据，则进行弹窗提示用户
        alert("该数据表格中已经存在了");
      else
        alert("缺少参数");
    }
  })

</script>

<style scoped>
/* 设置了scoped则当前组件固定按照当前的style规则进行样式呈现,否则可能出现全局样式的一系列问题导致当前组件的样式无法正常呈现 */
  * {
    text-decoration: none;
    color:black;
  }
  div.gray {
    background-color: gray;
    /* 开启弹性盒模型的布局对内容进行居中处理 */
    display:flex;
    align-items: center;
    justify-content: center;
  }
  div.content1 {
    background-color: white;
    width: 100%;
    height: 616px;
  }
  /* 对输入框和选择框进行样式设计 */
  input,
  option,
  select,
  button.Big {
    box-sizing: border-box;
    width: 75px;
    height:14px;
    border: 0;
    border: 1px solid rgb(118,118,118);
    border-radius: 0;
    margin-left: 5px;
  }
  /* 确保输入框在被选中时保持一致 */
  input:focus,
  select:focus {
    outline:none;
    /* 设置被选中的时候的input的样式发生改变,outline属性本意用于控制主题的类型，并且默认值为auto */
  }
  /* 上述需要注意的是input输入框和select输入框前者默认的box-sizing为contnet-box;后者为border-box */

  button.Big {
    width: 20px;
    margin-left: 0;
  }
  .top_part {
    width: 1088px;
    height: 50px;
    background-color: skyblue;
    overflow: hidden;
  }
  .top_part>input:nth-child(3) {
    border-right: 0;
  }
  button.Big::before {
    content: "\e608";
  }
  .Big:hover,
  .search:hover,
  .delete:hover,
  .add:hover {
    cursor: pointer;
  }

  /* 对表格进行样式设计 */
  table {
    margin-top: 5px;
    width:1088px;
    height: 500px;
    border-spacing: 0;
  }
  table>thead {
    min-height: 0;
    width: 100%;
    height: 40px;
    background-color: #cecece;
  }
  table thead>tr {
    width: 100%;
    height: 40px;
  }
  table thead>tr>th {
    width: 180px;
    height: 40px;
    color:black;
    font-size: 14px;
    font-weight: 800;
  }
  table tbody>tr {
    width: 100%;
    height: 40px;
  }
  table tbody>tr>td {
    width: 180px;
    height: 40px;
    border: 1px solid #9DA79F;
    font-weight: 10;
    font-size: 14px;
    /* 控制文本居中 */
    text-align: center;
  }
  /* 为顶部功能按钮标签设置统一样式 */
  .add,
  .delete,
  .search {
    border: 0;
    border-radius: 1px;
    color: white;
    margin-left: 5px;
    position: relative;
    top:1px;
  }
  .add {
    background-color: #317C77;
  }
  .delete {
    background-color: rgb(244, 57, 57);
  }
  .search {
    color: black;
    border: 0.1px solid rgb(118,118,118);
    background-color: white;
  }

</style>

<!-- 对于上述样式设计需要注意的是width:100%这种写法是针对进行嵌套后的父元素的100% -->
<!-- 同时需要注意的是在thead设置了固定的值，但是后续的th的样式设计如果过大同样会导致thead被撑大(因为thead默认overflow为visible) -->
