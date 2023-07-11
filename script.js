// document.getElementById("lovo")
// document.getElementsByClassName()
// document.getElementsByTagName()

// function syntax:

// function kaavaalaya(){
//     document.getElementById("lovo").innerHTML="that girl is sadhana";


// console.log(30+17);

// adding 
function add(){
    var x=parseInt(document.getElementById("n1")).value;
    var y=parseInt(document.getElementById("n2")).value;
    var z= x + y;
    document.getElementById("lovo").innerHTML=z;
}
function sub(){
    var x=document.getElementById("n1").value;
    var y=document.getElementById("n2").value;
    var z= x - y;
    document.getElementById("luss").innerHTML=z;
}
function multi(){
    var x=document.getElementById("n1").value;
    var y=document.getElementById("n2").value;
    var z= x * y;
    document.getElementById("sadh").innerHTML=z;
}
function div(){
    var x=document.getElementById("n1").value;
    var y=document.getElementById("n2").value;
    var z= x / y;
    document.getElementById("gayy").innerHTML=z;
}