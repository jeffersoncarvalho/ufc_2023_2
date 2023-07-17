let botao = document.querySelector("#id1");
function ola_mundo(){
    botao.classList.toggle("cor-de-fundo");
}

let botao2 = document.querySelector("#id2");
botao2.onclick = ola_mundo;

let botao3 = document.querySelector("#id3");
botao3.addEventListener("click", ola_mundo);