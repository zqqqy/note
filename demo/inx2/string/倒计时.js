var count = 60 * 15;
var countdown = setInterval(f, 1000);
function f() {
    if (count >= 0) {
        var minutes = Math.floor(count / 60);
        var seconds = Math.floor(count % 60);
        var msg = "请等待" + minutes + "分" + seconds + "秒";
        alert(msg);

        --count;
    } else {
        clearInterval(countdown);
        alert("倒计时结束");
    }
}
