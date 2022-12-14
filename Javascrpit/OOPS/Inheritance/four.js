class A{
    m1(){
    console.log("A class- m1()")
    }
}
class B extends A{
    m1(){
        console.log("B class-m1()")

    }

}
let a1 = new B()
a1.m1()