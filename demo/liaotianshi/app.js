const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server); // 创建express实例，赋值给app。
const fs = require('fs');            // 这个是node的文件读取模块，用于读取文件
const path = require('path');        // 这是node的路径处理模块，可以格式化路径

app.listen(3000,()=>{
    console.log("server running at 127.0.0.1:3000");       // 代表监听3000端口，然后执行回调函数在控制台输出。
});

/**
 * app.get(): express中的一个中间件，用于匹配get请求，说的简单点就是node处理请求的路由，对于不同url请求，让对应的不同app.get()去处理
 * '/': 它匹配get请求的根路由 '/'也就是 127.0.0.1:3000/就匹配到它了
 * req带表浏览器的请求对象，res代表服务器的返回对象
 */
app.get('/',(req,res)=>{
    res.redirect('/chat.html');      // express的重定向函数。如果浏览器请求了根路由'/',浏览器就给他重定向到 '127.0.0.1:3000/chat.html'路由中
});


/**
 * 这里匹配到的是/chat.html就是上面重定向到的路径。
 */
app.get('/chat.html',(req,res)=>{
    fs.readFile(path.join(__dirname,'./public/chat.html'),function(err,data){       //读取文件，readFile里传入的是文件路径和回调函数，这里用path.join()格式化了路径。
        if(err){
            console.error("读取chat.html发生错误",err);                    //错误处理
            res.send('4 0 4');                                           //如果发生错误，向浏览器返回404
        } else {
            res.end(data);                  //这里的data就是回调函数的参数，在readFile内部已经将读取的数据传递给了回调函数的data变量。
        }                                    //我们将data传到浏览器，就是把html文件传给浏览器
    })
});