class A{
    get_details(){
        console.log("Hello")
    }
}
class B extends A{
    constructor(){
        super();
        super.get_details()
        console.log("Gm")
    }
    get_ready(){

    }
}
new B().get_ready()