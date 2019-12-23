function fdiamond() {
    //倒入面膜快
    const rl = require("readline");
    //创建连接
    var readLine = rl.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("---菱形打印---");
    console.log("**********************************");
    console.log("params1[0: 实心图形； 1： 空心图形]");
    console.log("params2[菱形高度(奇数)]");
    console.log("params3[基本打印字符]");
    console.log("例如:(0 7 *)中间用空格隔开按回车打印");
    console.log("**********************************");
    //监听事件
    readLine.on("line", (aline) => {
        let setArray = new Array();
        //将接收的字符转换成熟组
        aline===".e" ? process.exit() : setArray = aline.split(" ");
        //对接收的数组进行判断
        if (setArray.length < 3 || setArray.length > 3 || isNaN(setArray[0]) || isNaN(setArray[1])){
            console.log("输入的是非法字符,请重新输入");
        }else {
            //对打印的图形进行判断
            if (setArray[0] == "0") {
                diamond(parseInt(setArray[1]), setArray[2]);
                console.log("输入.e退出,或继续依次输入图形、边长、内外距离和字符用空格分隔,打印另一个该图形");
            } else if (setArray[0] == "1"){
                Kdiamond(parseInt(setArray[1]),setArray[2]);
                console.log("输入.e退出,或继续依次输入图形,边长、内外距离和字符用空格分隔,打印另一个该图形");
            }else {
                console.log("首位请输入正确的字符“0”或“1”");
            }
        }
    });

    function diamond(n, m) {
        s = (n + 1) / 2;
        //设置上三角行的位置和大小
        for (let i = 0; i < s; i++) {
            //设立一个接收打印的空字符串
            let summ = "";
            //设置空格的位置
            for (let a = i; a < s; a++) {
                summ += " ";
            }
            //设置字符的位置
            for (let b = 0; b < 2 * i + 1; b++) {
                summ += m;
            }
            console.log(summ);
        }
        //设置下三角形位置
        for (let i = s - 2; i >= 0; i--) {
            var sum = "";
            for (let c = i; c < s; c++) {
                sum += " ";
            }
            for (let b = 0; b < 2 * i + 1; b++) {
                sum += m;
            }
            console.log(sum);
        }
    }
    function Kdiamond(n, m) {
        s = (n + 1) / 2;
        //设置上三角形的大小和位置
        for (let i = 0; i < s; i++) {
            var summ = "";
            for (let j = 1; j < 2 * s; j++) {
                //设置带有字符的位置
                if (j == (s - i) || j == (s + i)) {
                    summ += m + " ";
                } else {
                    summ += "  ";
                }
            }
            console.log(summ);
        }
        //设置下三角形的大小和位置
        for (let i = s - 2; i >= 0; i--) {
            //设立一个接收字符的空字符串
            let summ = "";
            for (let j = 1; j < 2 * n; j++) {
                //设置字符和空格位置
                if (j == (s - i) || j == (s + i)) {
                    summ += m + " ";
                } else {
                    summ += "  ";
                }
            }
            console.log(summ);
        }
    }
}
//f(5);
module.exports = fdiamond;