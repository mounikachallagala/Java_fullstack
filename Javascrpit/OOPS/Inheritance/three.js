class A{
 m1(){
    console.log("class A-m1 method")
 }
 m2(){
    console.log("class B - m2 method")
 }
}
class B extends A{

}
let a1 =new B ()
let a2 = new B()
a1.m1()
a2.m2()
