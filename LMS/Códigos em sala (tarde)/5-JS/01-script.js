// Saída de dados
console.log("Olá mundo 2!");

// Declaração de variáveis
// Dinamicamente tipada (o tipo vem do valor que é atribuído à variável)
var x = 2; // number (float e integer) (evitar declarar assim)
let y = 3;
let s = "abc";
let s1 = 'abc';
let b = true;

// Listas
let l = [];
let l1 = [1,2,3];
console.log(l1.length);
l1.push(5);
console.log(l1);

// Objetos
let o = {
    nome: "Eduardo",
    idade: 1500,
};
console.log(o);
console.log(o.nome);
o.idade = 1501;
console.log(o);

o.sobrenome = "Santos";
console.log(o);

// Laços
let j = 0;
while(j<10){
    console.log(j);
    j++;
}

for(let i=0; i< 10; i++){
    console.log(i);
}

for(let i=0; i<l1.length; i++){
    console.log(l1[i]);
}

console.log(l1);
for(let e of l1){
    console.log(e);
}

// Função
function add(a,b){
    return a+b;
}
console.log(add(1,2));

let add1 = function(a,b){
    return a+b;
}
console.log(add1(2,2));

let add2 = (a,b) => {
    let soma = a+b;
    return soma;
}
console.log(add2(2,3));

let add3 = (a,b) => (a+b);
console.log(add3(3,4));