const revInt =(num) => {
    let myRevNum = num.toString().split("").reverse().join("");
    console.log(myRevNum);
};
revInt(123);