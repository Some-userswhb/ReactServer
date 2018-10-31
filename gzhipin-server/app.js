/**
 * Created by 98194 on 2018/10/31.
 */
const express = request('express');

const app = express();



app.listen(4000,err =>  {
   if(!err) console.log('服务器启动成功')
   else console.log(err)


})