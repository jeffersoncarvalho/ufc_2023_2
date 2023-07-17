let teste = document.querySelector("div.teste");
teste.innerHTML = "Tudo bem?";
teste.innerHTML = teste.innerHTML + "show!";

let teste2 = document.querySelector("div.teste2");
teste2.innerHTML = "<h2>Meu título do js</h2>";

let input_nome = document.querySelector("#nome");
let valor = input_nome.value;
console.log(valor);
input_nome.value = "João";