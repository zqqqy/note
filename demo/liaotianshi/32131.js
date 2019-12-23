var net = require("net");
var clientList = []
var server = net.createServer((person)=>{
        clientList.push(person);
    person.write("请输入用户名\n");
    person.on("data",function (data) {
        console.log(data.toString());
        //socket.write(data);
        broadcast(data);
    });
    person.on("end", function () {
        person.write("end");
    });
});
function broadcast(data){
        for (var i = 0;i < clientList.length;i++ ){
            clientList[i].write(data);
        }
}
server.listen(1270,"127.0.0.1");