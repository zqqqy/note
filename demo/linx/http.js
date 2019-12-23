//创建http协议，接受用户响应
//引入模板
let http=require("http");
let server = http.createServer(function (req,res) {
//结束乡音
    res.end("<h1>Hello Word</h1>");

});
//监听端口
server.listen(3000,function () {
    console.log("Http Server running on port 3000");
})