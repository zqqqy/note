//导入net模块
const net = require('net');
//导入readline模块
const readline = require('readline');
//创建客户端
let client = new net.Socket();
//连接服务器:3000
client.connect(4343 ,"localhost");
//创建接口
let read = readline.createInterface({
    //输入
    input: process.stdin,
    //输出
    output: process.stdout
});
console.log("欢迎加入比比来来聊天室");
console.log("请输入用户名");
let userName = "";
//客户端事件监听
client.on('data', (chunk) => {
    //检测用户是否被占用

    if (chunk === '昵称已经被占用！') {
        userName = "";
    }

    if (userName === "") {
        return;
    }
    console.log(chunk.toString());
});
//错误事件
client.on('error', (er) => {
    console.log(er.message);
});
//readline事件监听
read.on('line', (mes) => {
    //退出进程
    if (mes === '.e') {
        process.exit();
    }
        if (userName === "") {
            userName = mes;
            client.write(userName);
        } else {
            client.write(userName + ' ' + mes);
        }
});