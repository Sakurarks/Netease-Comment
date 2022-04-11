const express = require('express');
const mysql = require('mysql');
const app = express();
const selectSQL = "SELECT * FROM 163_comments ORDER BY RAND() LIMIT 1;";

var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : 'sakurark'
});
connection.connect();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/netease-hitokoto',function(req,res,err){
  connection.query(selectSQL, (error, results, fields) => {
    if (error) {
      res.json({status: 500, auther: "Internal Error", comments: "Please feedback me."})
    }
    else{
      console.log(results);
      res.json({status: 200, auther: results[0].auther, comments: results[0].comments})
    }
  });
})

var server = app.listen(4000, '127.0.0.1', function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server running at http://%s:%s", host, port);
})