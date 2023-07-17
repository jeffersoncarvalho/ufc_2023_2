// Sempre retorna um elemento único
let div_id1 = document.getElementById("id1");
console.log(div_id1);

// Sempre retorna lista
let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(divs[0]);

let elementos_teste = document.getElementsByClassName("teste");
console.log(elementos_teste);

// querySelector retorna só o primeiro elemento que é selecionado pelo seletor
let div_teste_teste = document.querySelector(".teste .teste");
console.log(div_teste_teste);

// querySelector retorna lista de todos os elementos que são selecionados pelo seletor
let todos_teste = document.querySelectorAll(".teste");
console.log(todos_teste);