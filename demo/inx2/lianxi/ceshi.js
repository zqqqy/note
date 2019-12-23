function split2(str,symbol) {

    let [...strSpt] = str, i = 0, flag = 1, result = "", resultList = [], mached =0;
    //拿到字符串长度
    while(flag){
        (str[i]) ? i++ : flag = 0;
    }
    let strLength = i;
    flag = 1;
    i = 0;
    //拿到分割字符的长度
    while(flag){
        (symbol[i]) ? i++ : flag = 0;
    }
    let symbolLength = i;
    // 判断是否为空字符分割
    if (symbol == ""){
        return strSpt;
    }else{
        //判断单字符还是多字符
        debugger;
        if (symbolLength == 1){
            //单字符
            while (1){
                let res;
                [res,...strSpt] = strSpt;
                if (res == undefined){
                    resultList.push(result);
                    break;
                }
                if (res == symbol){
                    res = "";
                    resultList.push(result);
                    result = "";
                }
                result += res;
            }
        }else{
            //多字符
            let count = 0;
            while(1){
                let res;
                [res,...strSpt] = strSpt;
                if (res == undefined){
                    if (mached == 1) {
                        resultList.push(result);
                    }else{
                        return "字符串中不含此字符！";
                    }
                    break;
                }
                if (count == symbolLength){
                    resultList.push(result);
                    result = "";
                    mached = 1;
                    count = 0;
                }else{
                    if (res == symbol[count]){
                        count++;
                        continue;
                    }
                }
                result += res;
            }
        }
    }
    return resultList;
}
console.log(split2("12.2324.56", ""));