// 搭建服务器第一步，引入http模块
const http = require('http');
// 创建服务器
const server = http.createServer();
// 给服务器绑定ip和端口
server.listen(8080,()=>{
    console.log('服务器已经启动，可以通过 http://127.0.0.1:8080 访问');
});
// 注册浏览器请求服务器事件
server.on('request',(req,res)=>{
    console.log('请求进来了');
    // 设置响应头 -- 可以解决中午乱码问题，但一定得在返回之前设定
    res.setHeader('Content-Type','text/html;charset=utf-8');
    // 返回数据给浏览器
    res.end('Hello,World!');
});