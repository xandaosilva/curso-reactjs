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

// Arrow function
const sum = function sum(a, b){
    return a + b;
}

const arrowSum = (a, b) => a + b;

const greeting = (name) => {
    if(name)
        return `Olá ${name} !`;
    else
        return `Olá`;
}

const testArrow = () => console.log("Teste");

const user = {
    name: "Theo",
    sayUserName(){
        var self= this;
        setTimeout(function(){
            console.log(self);
            console.log(`Username: ${self.name}`);
        }, 500);
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 700);
    }
}

console.log(sum(5,5));
console.log(sum(10, 12));
console.log(greeting());
console.log(greeting("Alexandre"));
testArrow();
user.sayUserName();
user.sayUserNameArrow();

// Filter
const arr = [0, 1, 2, 3, 4, 5];
const users = [
    { name: "Usuário 1", available: true },
    { name: "Usuário 2", available: false },
    { name: "Usuário 3", available: false },
    { name: "Usuário 4", available: true }
];

const highNumbers = arr.filter((n) => {
    if(n >= 3)
        return n;
});

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(highNumbers);
console.log(availableUsers);
console.log(notAvailableUsers);

// Map
const products = [
    { name: "Camiseta", price: 10.99, category: "Roupas" },
    { name: "Chaleira elétrica", price: 49.99, category: "Eletro" },
    { name: "Fogão", price: 400, category: "Eletro" },
    { name: "Calça jeans", price: 50.99, category: "Roupas" }
]

products.map((product) => {
    if(product.category === "Roupas")
        product.onSale = true;
});

console.log(products);


