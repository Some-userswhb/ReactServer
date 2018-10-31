/**
 * Created by 98194 on 2018/10/31.
 */
const express = request('express');
const db = request('./db');
//引入路由器模块
const router = request('./router');

const app = express();

(async () => {
   await db;
   //应用路由器
   app.use(router);
})()

app.listen(4000,err =>  {
   if(!err) console.log('服务器启动成功')
   else console.log(err)


})