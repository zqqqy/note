function ftrapezoid() {


    const rl = require("readline");
    var readLine = rl.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("---梯形打印---");
    console.log("*******************************************");
    console.log("params1[0: 实心图形； 1： 空心图形]");
    console.log("params2[梯形上边长(奇数：上边长不能小于“1”)]");
    console.log("params2[梯形下边长(奇数：下边长必须大于上边长)]");
    console.log("params3[基本打印字符]");
    console.log("例如:(0 7 9 *)中间用空格隔开按回车打印");
    console.log("********************************************");
    readLine.on("line", (aline) => {
        let setArray = new Array();
        //将接收的字符转换成熟组
        aline===".e" ? process.exit() : setArray = aline.split(" ");
        //对接收的数组进行判断
        if (setArray.length < 4 || setArray.length > 4 || isNaN(setArray[0]) || isNaN(setArray[1]) || isNaN(setArray[2])){
            console.log("输入的是非法字符,请重新输入");
        }else {
            //对打印的图形进行判断
            if (setArray[0] == "0") {
                trapezoid(parseInt(setArray[1]), parseInt(setArray[2]),setArray[3]);
                console.log("输入.e退出,或继续依次输入图形、边长、内外距离和字符用空格分隔,打印另一个该图形");
            } else if (setArray[0] == "1"){
                Ktrapezoid(parseInt(setArray[1]), parseInt(setArray[2]),setArray[3]);
                console.log("输入.e退出,或继续依次输入图形,边长、内外距离和字符用空格分隔,打印另一个该图形");
            }else {
                console.log("首位请输入正确的字符“0”或“1”");
            }
        }
    });
    //n:上边长  m:下边长  s:基础打印字符
    function trapezoid(n, m, s) {
        //c: 接收上边长的长度进行运算
        let c = (n + 1) / 2;
        //d: 接收下边长的长度进行运算
        let d = (m + 1) / 2;
        if (n != 1) {
            for (var i = c; i <= d; i++) {
                //传建一个空字符创几首打印值
                var summ = "";
                for (var a = i; a < d; a++) {
                    summ += " ";
                }
                for (var b = 0; b < 2 * i - 1; b++) {
                    summ += s;
                }
                console.log(summ);
            }
        } else {
            return 0;
        }
    }
    //n:上边长  m:下边长  s:基础打印字符
    function Ktrapezoid(n, m, s) {
        //b: 接收上边长的长度进行运算
        let b = (n + 1) / 2;
        //d: 接收下边长的长度进行运算
        let d = (m + 1) / 2;
        if (n != 1) {
            //设置左边倒三角形位置
            for (var i = 1; i <= d; i++) {
                var string = '';
                for (var c = d; c >= i; c--) {
                    string += "  ";
                }
                console.log(string);
                if (i >= b) {
                    //if判断字符的位置大小
                    for (var j = 1; j <= 2 * i - 1; j++) {
                        if (i == b || i == d) {
                            string += s + " ";
                        } else {
                            if (j == 1 || j == 2 * i - 1) {
                                string += s + " ";
                            } else {
                                string += "  ";
                            }
                        }
                    }
                    console.log(string);

                }
            }
        } else {
            return 0;
        }
    }
}
//f(3,5,'?');
//f(5,15,"^");
module.exports = ftrapezoid;


