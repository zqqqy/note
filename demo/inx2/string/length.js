//检测字符串长度
function length(str) {
    //i:变量为计数器
    var i = 0;
    while(str[i] != undefined){
        i++;}
    return i;
}
module.exports = length;