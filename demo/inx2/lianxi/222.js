/**
 * 获取字符串长度
 * @param str 用户输入的字符串
 * @returns {number} 字符串长度
 */
function getLength(str) {
    let i = 0;
    while (str[i]) {
        i++;
    }
    return i;
}

/**
 * 字符串搜索
 * @param inputStr 用户输入的字符串
 * @param search 用户输入的搜索串
 * @returns {array} 出现的位置
 */
function searchStrs(inputStr, search) {
    //获取用户输入的字符串长度
    let strLength = getLength(inputStr);
    //获取用户输入的查找字符串长度
    let searchLength = getLength(search);
    let n = -1;
    let positionArr = [];
    for (let i = 0; i < strLength - searchLength + 1; i++) {
        //声明一个空字符串,用于拼接
        let str = "";
        for (let j = 0; j < searchLength; j++) {
            str += inputStr[i + j];
            if (str === search) {
                n++;
                positionArr[n] = i;
            }
        }
    }
    return positionArr;
}

/**
 * 指定字符合并数组为字符串
 * @param str 用户输入的数组,其实是字符串
 * @param code 用户输入的字符
 * @returns {string} 合并后的字符串
 */
function join(str, code) {
    //字符串转换数组
    let [...a] = str;
    let positionArr = searchStrs(a, ",");
    //遍历数组
    for (let i in positionArr) {
        a[positionArr[i]] = code;
    }
    //声明一个空字符串,用于拼接
    let string = "";
    //循环拼接
    for (let i in a) {
        string += a[i];
    }
    return string;
}