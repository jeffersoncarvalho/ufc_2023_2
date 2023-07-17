
// Saída de dados
// print() scanf() cin sysout
console.log("Hello world!");

// Linguagem tipagem dinâmica
// Tipos são definidos a partir do valor que você atribui

// Declaração de variáveis
var x = 2; // var não é mais tão utiliazdo
let s = "abc";
let y = 10;
console.log(s);

// Objetos
// Estrutura em formate de chave-valor
// Pessoa nome:Edward idade:1500

let pessoa = {
    nome:"Edward",
    idade:1500
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

// Funções
function add (a,b){
    return a+b;
}
console.log(add(1,2));

let add1 = function (a,b){
    return a+b;
}
console.log(add1(2,2));

let add2 = (a,b) => {
    let soma = a+b;
    return soma;
}
console.log(add2(2,3));

let add3 = (a,b) => (a+b);
console.log(add3(3,3));

// Laços
for(let i=0; i<5; i++){
    console.log(i);
}

let i=0;
while(i<5){
    console.log(i);
    i++;
}

// Listas
let l = [];
let l1 = [1,2];

l.push(3);
l.push(4);
console.log(l);

for(let j=0; j<l.length; j++){
    console.log(l[j]);
}

for(e of l){
    console.log(e);
}