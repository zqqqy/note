//字符串搜索
function fsearch(set,count) {
    //单个字符串搜索
    for (let j in set) {
        if (set[j] == count){
            return j;
        }
    }
}


//console.log(fsearch("12343 .543412",".");)
module.exports = fsearch;