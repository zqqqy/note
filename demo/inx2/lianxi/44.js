function isRepeat(arr) {
    for (var i=0; i<arr.length; ++i) {
        var e = arr[i];
        var count = 0;
        for (var j=0; j<arr.length; ++j) {
            if (arr[j] == e) {
                count ++;
            }
        }

        if (count > 1) {
            return false;
        }else {
            console.log(turn);
        }
    }

}
arr = [1,2,3];
console.log(isRepeat(arr));