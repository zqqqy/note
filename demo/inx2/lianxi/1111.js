var num = function(arr){
    var arr1 = [];
    var arr2 = [];
    var s = true;
    for(var i=0;i<arr.length;i++){
        //如果第一次出现，记录次数1
        if(!arr1[arr[i]]){
            arr1[arr[i]]=1;
        }else{
            //否则次数加一
            arr1[arr[i]]=arr1[arr[i]]+1;
        }
    }
    for(var j in arr1){
        //如果每个数都存在次数都不相等，就是对的
        if(!arr2[arr1[j]]){
            arr2[arr1[j]] = true;
        }else{
            //想等返回false
            s = false;
            arr2[arr1[j]] = false;
        }
    }
    return s;
}
arr = [1,2,1];
console.log(num(arr));