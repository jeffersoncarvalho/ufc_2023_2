let conteudo = document.querySelector(".section .content");
let titulo = document.querySelector(".section .title");

function abrir_conteudo(){
    conteudo.classList.toggle("active");
}

titulo.addEventListener("click", abrir_conteudo);