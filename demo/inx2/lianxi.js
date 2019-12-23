function fuc(arr) {
    let obj={};//定义一个空数组;[,1,]
    for(let i=0; i < arr.length; i++){
        var b=arr[i];
        if(obj[b]==null){
            obj[b] = 1;
        } //判断是否为空，如果为空将这个下标的值设为1
        else {
            obj[b]++ ;//否则赋值如：obj['1']=1累加;
        }
        //obj[b]==null ? obj[/media/chenle/8A72-CC02/js-learn/split/len.js
        ///media/chenle/8A72-CC02/js-learn/split/test.htmlb]=1 : obj[b]++;//判断数值是否为空如果为空下标值为一，否则累加
    }
    let obj1={};
    //r如果得出的下标数相同则为假如果不同则为真
    for(let item in obj){
        if(obj1[obj[item]]){
            return false;
        }else{
            obj1[obj[item]]=true;
        }
    }
    return true;
};
arr = [1,1,2,3,3,3];
console.log(fuc(arr));
