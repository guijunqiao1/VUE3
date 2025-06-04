//进行后端的路由的设计
import axios from "axios";
const mysql = require("mysql2/promise");

//对数据库进行配置
const dbConfig = {
  host:"127.0.0.1",
  username:"root",
  password:"Abc123456.",
  databases:"project01"
}
//和数据库创建连接
async function executeQuery(){
  // 创建连接
  const connection = await mysql.createConnection(dbConfig);
  console.log('数据库连接成功！');

  // 示例1：基本查询
  const [rows] = await connection.execute('SELECT * FROM your_table');
  console.log('查询结果:', rows);

  // 示例2：带参数的查询（防SQL注入）
  const [users] = await connection.execute(
    'SELECT * FROM users WHERE age > ? AND name = ?',
    [18, 'John']
  );

  // 示例3：插入数据
  const [result] = await connection.execute(
    'INSERT INTO users (name, age) VALUES (?, ?)',
    ['Alice', 25]
  );
  console.log('插入ID:', result.insertId);

  // 示例4：更新数据
  const [updateResult] = await connection.execute(
    'UPDATE users SET age = ? WHERE name = ?',
    [26, 'Alice']
  );
  console.log('更新行数:', updateResult.affectedRows);

  // 关闭连接
  await connection.end();
}



//注意和先前的mongodb数据库的联系操作之间的区别(使用mongoose实现)
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');
module.exports = function(success,error){
  if(typeof error!=="function")error=()=>{
    console.log("连接失败");
  }
  mongoose.connection.once("open",()=>{
    success();
  })
  mongoose.connection.on("error",()=>{
    error();
  })
  mongoose.connection.on("close",()=>{
    console.log("连接关闭");
  })
}