function f1() {
    //倒入模块
    const rl = require("readline");
    //创建接口输入输出
    var readLine = rl.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("---三角形打印---");
    console.log("**********************************");
    console.log("params1[0: 实心图形； 1： 空心图形]");
    console.log("params2[三角形高度(奇数)]");
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
                triangle(parseInt(setArray[1]), setArray[2]);
                console.log("输入.e退出,或继续依次输入图形、边长、内外距离和字符用空格分隔,打印另一个该图形");
            } else if (setArray[0] == "1"){
                Ktriangle(parseInt(setArray[1]),setArray[2]);
                console.log("输入.e退出,或继续依次输入图形,边长、内外距离和字符用空格分隔,打印另一个该图形");
            }else {
                console.log("首位请输入正确的字符“0”或“1”");
            }
        }
    });

    function triangle(n, m) {
        //设置三角形高度
        for (var i = 1; i <= n; i++) {
            var summ = "";
            //添加左边三角形为空格挤出又三角行左边的边
            for (var a = i; a <= n; a++) {
                summ += " ";
            }

            for (var b = 0; b < 2 * i - 1; b++) {
                summ += m;
            }

            console.log(summ);
        }
    }
    function Ktriangle(n, m) {
        s = n - 1;
        //设置三角形高度
        for (var i = 0; i <= s; i++) {
            var summ = "";
            //设置三角形宽度
            for (var j = 0; j <= 2 * s; j++) {
                //判断字符和空格的位置
                if (i == s || j == (s - i) || j == (s + i)) {
                    summ += m + " ";
                } else {
                    summ += "  ";
                }
            }
            console.log(summ);
        }
    }
}
// f1();
//f(5);
module.exports = f1;

