//倒入模块
const rl = require("readline");
//创建接口
var readLine = rl.createInterface({
    input:process.stdin,
    output:process.stdout
});
console.log("**********************************************************");
console.log("输入“1”[检测字符串长度][例如:(1 rewqrqwer)用空格隔开按回车结束]");
console.log("       ");
console.log("输入“2”[用指定字符截取字符串成数组][例如:(2 rewqrqwer r)用空格隔开按回车结束]");
console.log("       ");
console.log("输入“3”[字符串搜索][例如:(3 rewqrqwer r)用空格隔开按回车结束]");
console.log("       ");
console.log("输入“0”[退出]");
console.log("**********************************************************");
//监听事件
readLine.on("line",(aline)=> {
    let setArray = new Array();
    //将接收的字符转换成熟组
    aline==="0" ? process.exit() : setArray = aline.split(" ");
    if (setArray.length <= "1" || isNaN(setArray[0])) {
        console.log("输入的是非法字符,请重新输入");
    }else {
        switch (setArray[0]) {
            case "1":
                console.log(length(setArray[1]));
                console.log("**********************************************************");
                console.log("输入“1”[检测字符串长度][例如:(1 rewqrqwer)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“2”[用指定字符截取字符串成数组][例如:(2 rewqrqwer r)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“3”[字符串搜索][例如:(3 rewqrqwer r)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“0”[退出]");
                console.log("**********************************************************");
                break;
            case "2":
                console.log(ceoSplit(setArray[1], setArray[2]));
                console.log("**********************************************************");
                console.log("输入“1”[检测字符串长度][例如:(1 rewqrqwer)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“2”[用指定字符截取字符串成数组][例如:(2 rewqrqwer r)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“3”[字符串搜索][例如:(3 rewqrqwer r)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“0”[退出]");
                console.log("**********************************************************");
                break;
            case "3":
                console.log(fsearch(setArray[1], setArray[2]));
                console.log("**********************************************************");
                console.log("输入“1”[检测字符串长度][例如:(1 rewqrqwer)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“2”[用指定字符截取字符串成数组][例如:(2 rewqrqwer r)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“3”[字符串搜索][例如:(3 rewqrqwer r)用空格隔开按回车结束]");
                console.log("       ");
                console.log("输入“0”[退出]");
                console.log("**********************************************************");
                break;
        }
    }
});
//检测字符串长度
function length(str) {
    //i:变量为计数器
    var i = 0;
    while(str[i] != undefined){
        i++;}
    return i;
}


//用指定字符截取字符串成数组
function ceoSplit(str,value) {
    //设arrArray变量 接收数组
    let arrArray = new Array();
    let strLength = Length(str);
    let symbolLength = Length(value);
    //结构赋值
    let [...strSpt] = str;
    var num = 0;
    arrArray[0] = '';
    let num1 = 0;
    //当value为空值时
    if (symbolLength == 0) {
        return strSpt;
        //当value为一个字符时
    } else if (symbolLength == 1) {
        //遍历sta字符串每个字符与与value对比
        for (let i = 0; i < strLength; i++) {
            //判断是否全等于value中的字符设num为arrArray的下标
            if (str[i] == value) {
                num++;
                arrArray[num] = "";
                //若果不等于将其赋值给arrArray
            } else {
                arrArray[num] += str[i];
            }
        }
        return arrArray;
        //当value为多个字符时
    } else if (symbolLength == 2) {
        //遍历sta字符长中的字符
        for (let i = 0; i < strLength; i++) {
            //遍历value字符中的字符
            for (let a = 1; a < symbolLength; a++) {
                //判断value中的字符是否全等于是他中的字符
                if (str[i] == value[0] && str[i + a] == value[a]) {
                    num++;
                    arrArray[num] = "";
                    i = i + symbolLength - 1;
                } else {
                    arrArray[num] += str[i];
                }
            }
        }
        return arrArray;
    }
    //求字符串中的长度
    function Length(str) {
        var i = 0;
        while(str[i] != undefined){
            i++;}
        return i;
    }
}


//字符串搜索
function fsearch(set,count) {
    //单个字符串搜索
    for (let j in set) {
        if (set[j] == count){
            return j;
        }
    }
}