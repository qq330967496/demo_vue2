var express = require('express');
var todoList = require('./controller/todoList-json');
var path = require('path');
var http = require('http');
var app = express();

//设置前端目录文件
app.use('/',     express.static(path.join(__dirname, '/web')));

//设置controller
todoList(app);

app.get('/', function (req, res) {
	console.log("主页跳转");
	res.redirect('app.html');
});


app.listen(8888,'localhost',function(){

	var host = this.address().address;
	var port = this.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port);
});