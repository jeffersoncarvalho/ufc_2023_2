let conteudos = document.querySelectorAll(".section .content");
let titulos = document.querySelectorAll(".section .title");

function abrir_conteudo(){
    let conteudo = this.nextElementSibling;
    
    conteudo.classList.toggle("active");
}

for(let titulo of titulos){
    titulo.addEventListener("click", abrir_conteudo);
}
