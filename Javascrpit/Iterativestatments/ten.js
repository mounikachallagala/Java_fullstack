let a=0 , b=1;
console.log(a)
console.log(b)
for(let i=0;i<=17;i++){
    let temp = a+b;
    console.log(temp);
    a=b;
    b=temp;
}