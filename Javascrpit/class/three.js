class Account {
    min_Bal = 500;

open_Account() {
    console.log("opened Account Successfully")
}
deposit_Amount() {
    console.log("deposited amount successfully")

}
get_str(){
    console.log("displaying st")
}
get_Bal(){
    console.log("Display Bal")
}
withdrawl_Amount(){
    console.log("no cash come tomorrow")
}
close_Account(){
    console.log("not possible pay GST!")
}
}
let a1 = new Account();
console.log(a1)
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_str()
a1.get_Bal()
a1.withdrawl_Amount()
a1.close_Account()
