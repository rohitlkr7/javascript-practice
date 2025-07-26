


// var , let , const - line- by-line comprasion

var username ="rohit";
var num= ((45*3)-10)
console.log(num)

var a;
var a=10;
// let b;
let b = 20;
const c=30;

// var let const
// declaration and initilization

var a=12 ;

// window mein add hota hai
// function scope hota hai
// aap firse decalare kr skte ho same name se and error nhi aayega

function abcd (){
    var a = 20 
    console.log(a)
}
abcd()

       // SCOPE (globale, block, functional)
//globale  

var a = 45;
function test() {
    var b = 30 ;  "function scope"
    console.log(a + b);
}
test();


