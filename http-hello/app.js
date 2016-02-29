/**
 * Created by Administrator on 2016/2/29.
 */

// 使用ES5语法的，创建最简单http服务器

//nodejs内建的http模块

//require表示导入模块
//    其特点为，没有.或者..,/等开头，则会从node_modules中获取模块
//    优先级是先找.js, 然后找.json, 在最后找.node(这个是c++模块)
var http = require('http');

//createServer需要接收一个函数作为参数
//当请求发生时，会调用这个函数，并且传入request和response对象
http.createServer(function(req, res){
    //向客户端返回信息，并结束此次请求
    res.end(req.url);
    //监听3000端口
}).listen(3000);