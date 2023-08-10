// let div_teste = document.getElementById("teste");
let div_teste = document.querySelector("#teste");
div_teste.innerHTML = "Oi";
div_teste.style.color = "pink";
div_teste.style.backgroundColor = "green"; 

let divs_copa = document.querySelectorAll(".classe1");
for(let div of divs_copa){
    div.innerHTML = "Vem, hexa!";
}

let input_src = document.querySelector("#jogador");
input_src.value = "Ronaldo Fenômeno";
// input_src.type = "password";

let div2 = document.querySelector("#id2");
div2.classList.add("classe3");
div2.classList.remove("classe2");
div2.classList.toggle("classe3");
div2.classList.toggle("classe3");