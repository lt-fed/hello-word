/**
 * Created by Administrator on 2016/2/29.
 */
//使用一些ES6语法的hello， world！

const http = require('http');

http.createServer( (req, res) => {
    res.end(req.url);
}).listen(3000);