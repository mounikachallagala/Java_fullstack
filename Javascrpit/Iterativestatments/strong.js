var num = 123;
console.log("number : "+num);
var check = num;
var armstrong = 0;
var sum = 0;
var power;
var len = num.toString().length;
while(num != 0){
    armstrong = num % 10;
    power = Math.pow(armstrong,len);
    sum = sum + power;
    num = parseInt(num/10);
}
if(check == sum){
    console.log("this is armstrong number");
}
else{
    console.log("this is not a arm strong number");
}
