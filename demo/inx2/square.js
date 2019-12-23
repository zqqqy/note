function fsquare() {


    const rl = require("readline");
    var readLine = rl.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("---正方形打印---");
    console.log("**********************************");
    console.log("params1[0: 实心图形； 1： 空心图形]");
    console.log("params2[正方形边长]");
    console.log("params3[基本打印字符]");
    console.log("例如:(0 7 *)中间用空格隔开按回车打印");
    console.log("**********************************");
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
                square(parseInt(setArray[1]), setArray[2]);
                console.log("输入.e退出,或继续依次输入图形、边长、内外距离和字符用空格分隔,打印另一个该图形");
            } else if (setArray[0] == "1"){
                ksquare(parseInt(setArray[1]),setArray[2]);
                console.log("输入.e退出,或继续依次输入图形,边长、内外距离和字符用空格分隔,打印另一个该图形");
            }else {
                console.log("首位请输入正确的字符“0”或“1”");
            }
        }
    });

    function square(n, s) {
        for (let i = 0; i < n; i++) {
            var sum = s + " ";
            for (let j = 1; j < n; j++) {
                sum += s + " ";
                /*console.log("*");*/
            }
            console.log(sum);
        }
    }
    function ksquare(n, m) {
        //设置正方形高度
        for (let i = 1; i <= n; i++) {
            //设置一个变量接收字符
            let sum = "";
            //设置正方形宽度是高度宽度相等
            for (let j = 1; j <= n; j++) {
                //是指字符位置与空格位置
                if (i == 1 || i == n || j == 1 || j == n) {
                    sum += m + "  ";
                } else {
                    sum += "   ";
                }
            }
            console.log(sum);
        }
    }
}
//f(5)
module.exports = fsquare;