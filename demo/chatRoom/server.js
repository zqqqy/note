//导入模块
const net = require('net');
// 创建服务器
const server = net.createServer();
//创建数组,用于保存用户信息
let clientArr = [];
//创建数组,用于保存用户名列表
let nameList = [];
//事件监听
server.on('connection', (person) => {
    let name = "";
    let data = "";
    // 记录链接的进程
    person.id = clientArr.length;
        clientArr.push(person);
    // 客户socket进程绑定事件
    person.on('data', (chunk) => {

        // 运用if嵌套数据写入全部客户进程
        if (name === "") {
            name = chunk;
            if (nameList.includes(name)) {
                person.write("昵称已经被占用！");
                name = "";
            } else {

                nameList.push(name);
                clientArr.forEach((val) => {
                    val.write('欢迎' + name + '加入群聊!\n');
                })
            }
        } else {
            clientArr.forEach((val) => {
                //动态时间
                let time = new Date();
                data = chunk.slice(name.length + 3, chunk.length);
                val.write(name + ' ' + time.toString().slice(16, 24) + '\n' + data);
            })
        }
    });
    //用id监听客户动态是否出链接
    person.on('close', (p1) => {
        clientArr[p1.id] = null;
        clientArr.forEach((val) => {
            val.write(name + '退出群聊！');
        })
    });
    person.on('error', (p1) => {
        clientArr[p1.id] = null;
    })
}).listen(4343,"127.0.0.1");
console.log("Sever is running on port 3000");