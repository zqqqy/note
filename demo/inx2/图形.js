console.log("实心等腰三角形");
for (var i=1;i<=5;i++){
    var summ="";
    for (var a = i ; a <= 5 ; a++) {
        summ += " ";
    }
    for (var b = 0; b < 2 * i - 1; b++) {
        summ += "*";
    }

    console.log(summ);
}
console.log(" ");
console.log(" ");



console.log("空心等腰三角形");
for(var i=0; i<6; i++){
    var summ = "";
    for (var j=1;j<2*6;j++){
        if ( i==5 ||j==(6-i) || j==(6+i)){
            summ += "* ";
        }else {
            summ += "  ";
        }
    }
    console.log(summ);
}
console.log(" ");
console.log(" ");


console.log("实心菱形");
for (var i=0;i<=5;i++) {
    var summ = "";
    for (var a = i; a < 6; a++) {
        summ += " ";
    }
    for (var b = 0; b < 2 * i + 1; b++) {
        summ += "*";
    }
    console.log(summ);
}
for (var i=5;i>0;i--){
    var sum="";
    for (var c = i;c<7;c++) {
        sum += " ";
    }
    for (var b = 0;b<2*i-1;b++){
        sum+="*";
    }
    console.log(sum);
}
console.log(" ");
console.log(" ");


console.log("空心菱形");
for(var i=0; i<6; i++){
    var summ = "";
    for (var j=1;j<2*6;j++){
        if ( j==(6-i) || j==(6+i)){
            summ += "* ";
        }else {
            summ += "  ";
        }
    }
    console.log(summ);
}
for(var i=4; i>=0; i--){
    var summ = "";
    for (var j=1;j<2*6;j++){
        if (j==(6-i) || j==(6+i)){
            summ += "* ";
        }else {
            summ += "  ";
        }
    }
    console.log(summ);
}
console.log(" ");
console.log(" ");


console.log("实心正方形");
for(var i=6;i<10;i++){
    var zhengfangxing = "*";
    for(var j=1;j<10;j++){
        zhengfangxing += "*";
        /*console.log("*");*/
    }
    console.log(zhengfangxing);
}
console.log(" ");
console.log(" ");


console.log("空心正方形");
for(var i=1;i<10;i++){
    var zhengfangxing = "";
    for(var j=1;j<10;j++){
        if (i==1||i==9||j==1||j==9) {
            zhengfangxing += "*  ";
        }else{
            zhengfangxing+="   ";
        }
    }
    console.log(zhengfangxing);
}
console.log(" ");
console.log(" ");


console.log("回字形");
for(var i=1;i<10;i++){
    var zhengfangxing = "";
    for(var j=1;j<10;j++){
        if (i==1||i==9||j==1||j==9) {
            zhengfangxing += "*  ";
        }else if ((i>=3&&i<=7)&&(j>=3&&j<=7)&&((i==3||i==7)||(j==3||j==7))){
            zhengfangxing+="*  ";
        }else //if (i>=4&&i<=6&&j>=4&&j<=6)
        {
            zhengfangxing+="   ";
        }
    }
    console.log(zhengfangxing);
}
console.log(" ");
console.log(" ");


console.log("梯形");
for (var i=3;i<=10;i++) {
    var summ = "";
    for (var a=i;a<10;a++) {
        summ += " ";
    }
    for (var b = 0; b < 2 * i - 1; b++) {
        summ += "*";
    }
    console.log(summ);
}
console.log(" ");
console.log(" ");


console.log("空心梯形");

for(var i=1;i<=10;i++){
    var string='';
    for(var c=10; c>=i; c--){
        string += "  ";
    }
    console.log(string);
    if(i>=5){
        for(var j=1;j<=2*i-1;j++){
            if(i==5 || i==10){
                string+='* ';
            } else {
                if(j==1 || j==2*i-1){
                    string+="* ";
                } else {
                    string+="  ";
                }
            }
        }
        console.log(string);

    }
}
