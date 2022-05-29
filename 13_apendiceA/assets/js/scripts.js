// var, let e const
let a = 10;
let b = 15;
let i = 100;
var x = 10;
var y = 15;

if(b > 10){
    let a = 5;
    console.log(a);
}

console.log(a);

if( y > 10){
    x = 5;
    console.log(x);
}

console.log(x);

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

function logName(){
    const name = "Primeiro nome";
    console.log(name);
}

const name = "Segundo name";

logName();
console.log(name);
