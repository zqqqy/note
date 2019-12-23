//计数
console.count();
console.count();
console.count("le");
console.countReset("重置计数");
console.count();
//计算一段程序的运行时间
console.time();
for (let i=0;i<10;i++){
    console.dir(i);
}
console.timeEnd();

console.log("chenle");
console.group();
console.log("chenle");
console.groupEnd();
console.log("chenle");

console.error("cuowu");
console.warn("zhengque");
console.trace("trace");


const figlet = require("figlet");
figlet("xia wei wei da pang zi pao huo che",function (err,date) {
    console.log(date);
});