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
//console.log(ceoSplit("weqewq12ewqewq12ewqe12weqe","1"));
module.exports = ceoSplit;