const express = require('express');
const app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/netease-hitokoto',function(req,res,err){
  
})

var server = app.listen(4000, '127.0.0.1', function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server running at http://%s:%s", host, port);
})