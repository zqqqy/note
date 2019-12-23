//导入模块
const rl = require("readline");
const triangle = require("./triangle.js");
const returnWord = require("./returnWord.js");
const diamond = require("./diamond.js");
const square = require("./square.js");
const trapezoid = require("./trapezoid.js");
//创建接口
var readLine = rl.createInterface({
    input:process.stdin,
    output:process.stdout
});
console.log("**********************************");
console.log("请输入数字选择图形按回车结束（单次只能输入一个数字）");
console.log("输入“1”[打印三角形]");
console.log("输入“2”[打印回字形]");
console.log("输入“3”[打印菱形]");
console.log("输入“4”[打印正方形]");
console.log("输入“5”[打印梯形]");
console.log("输入“0”[退出]");
console.log("**********************************");
//监听事件
readLine.on("line", (aline) =>{
    let setArray = new Array();
    //将接收的字符转换成熟组
    aline==="0" ? process.exit() : setArray = aline.split("");
    if (setArray.length<1 || setArray.length>1 || isNaN(setArray[0] || setArray[0]>6)) {
        console.log("输入的是非法字符,请重新输入");
    }else {
        switch (aline) {
            case "1":
                readLine.close();
                triangle();
                break;
            case "2":
                readLine.close();
                returnWord();
                break;
            case "3":
                readLine.close();
                diamond();
                break;
            case "4":
                readLine.close();
                square();
                break;
            case "5":
                readLine.close();
                trapezoid();
                break;
            case "0":
                process.exit();
                break;
        }
    }
});