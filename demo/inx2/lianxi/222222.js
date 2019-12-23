
function f(n, m, s) {
    //设置行数

    for (var i = 1; i <= n; i++) {
        var hui = "";
        var xiao ="";
        var kong ="";
        var zong = "";
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
module.exports.hui = f()
