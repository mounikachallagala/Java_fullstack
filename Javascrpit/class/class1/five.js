class Account{
    min_bal =500;
    acc_bal=0
    acc_Name =""
    set_AccountName(name){
        this.acc_Name=name
    }
    deposit_amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    get_bal(){
        return this.acc_bal-this.min_bal
    }
}
let a1 = new Account()
let a2 = new Account()
console.log(a1)
console.log(a2)
a1.set_AccountName("Dhoni")
a2.set_AccountName("Virat")
console.log("After Updating Name")
console.log(a1)
console.log(a2)
console.log("***After Deposit***")
a1.deposit_amount(10000)
a2.deposit_amount (60000)
console.log(a1)
console.log(a2)

console.log("display bal")
let r1 = a1.get_bal()
let r2 = a2.get_bal()
console.log(r1)
console.log(r2)