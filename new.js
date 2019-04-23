// var obj ={name: "Sha", age:"20"}
// console.log(obj)

// function add (a,b){
//     return a+b;
// }

// console.log(add(4,5));

// //Anomious Function
// var prints= function(){
//     console.log("hello")
// };
// prints();

// setTimeout(prints, 4000);

// function request(order) {
//     console.log("Customer order", order);
//     response(function (){
//         console.log("delivered data", order )
//     })
// }
// function response(callback){
//     setTimeout(callback, 4000)
// }

// request(1);
// request(2);
// request(3);
// request(4);
// request(5);

// var Name={
//     favcolor: "blue",
//     favmovie: "abc"
// };
// var New =Name;
// New.favcolor= "Green"
// console.log(Name.favcolor);

// Difference b/t == & ===
// console.log(20 == "20");

// console.log(20 === "20");

// var hello={
//     printname: function(){
//         console.log(this === hello)
//     }
// };
// hello.printname();

// function worthless(){
//     console.log(this===global);
// }
// worthless()

function person(name){
    this.name=name
}
person.prototype={
    my:function(){
        console.log("My name is " + this.name)
    }
};
var fra = new person("Sha");
fra.my()