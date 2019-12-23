let a;
let b;
process.stdout.write("请输入a的值 ");
process.stdin.on("data",function (chunk) {
    if (!a) {
        a = Number(chunk);
        process.stdout.write("请输入b的值 ");
    }else{
        b = Number(chunk);
        process.stdout.write("请输入和 " + (a + b));
    }
});