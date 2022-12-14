class Account{
    min_bal = 500
    acc_bal = 0

    deposite_amount(amount){
        this.acc_bal= this.acc_bal + amount
    }

}

let a1 = new Account()
a1.deposite_amount(5000)
a1.deposite_amount(2000)
console.log(a1)
