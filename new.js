// var obj ={name: "Sha", age:"20"}
// console.log(obj)

function add (a,b){
    return a+b;
}

console.log(add(4,5));

//Anomious Function
var prints= function(){
    console.log("hello")
};
prints();

setTimeout(prints, 4000);