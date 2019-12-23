function freturnWord() {


    const rl = require("readline");//倒入模块
    var readLine = rl.createInterface({    //创建接口
        input: process.stdin,
        output: process.stdout
    });
    console.log("---回字形打印---");
    console.log("**********************************");
    console.log("params1[回字形外边长]");
    console.log("params2[回字形内边与外边的距离(长度必须小于外边长半)]");
    console.log("params3[基本打印字符]");
    console.log("例如:(8 3 *)中间用空格隔开按回车打印");
    console.log("**********************************");
    //监听事件
    readLine.on("line", (a) => {
        let sum;
        a===".e" ? process.exit() :  sum = a.split(" ");
            if (sum.length < 3 || sum.length > 3 ||isNaN(sum[0]) || isNaN(sum[1])){
                console.log("输入的是非法字符,请重新输入");
            }else {
                returnWord(parseInt(sum[0]), parseInt(sum[1]), sum[2]);

                console.log("输入.e退出,或继续依次输入图形,边长、内外距离和字符用空格分隔,打印另一个该图形");
            }
    });

    function returnWord(n, m, s) {
        //设置行数

        for (var i = 1; i <= n; i++) {
            var hui = "";

            //设置列数
            for (var j = 1; j <= n; j++) {
                //写出外边框的位置
                if (i == 1 || i == n || j == 1 || j == n) {
                    hui += s + " " ;
                    // console.log(hui);
                    //写出内边框的位置
                } else if ((i >= m && i <= n - (m - 1)) && (j >= m && j <= n - (m - 1)) && ((i == m || i == n - (m - 1)) || (j == m || j == n - (m - 1)))) {
                    hui += s + " ";
                    // console.log(xiao);
                } else {
                    hui += "  ";
                }
                // zong = hui + kong + xiao;


            }
            console.log(hui);
            //   var hui2="";
            // hui2 += hui ;
            // zong = hui + kong + xiao +"\n";
        }
        // return zong;
    }
}
module.exports = freturnWord;