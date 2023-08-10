function alternar_conteudo(){
    let conteudo = document.querySelector(".accordion .section .conteudo");

    conteudo.classList.toggle("active");
}

let titulo = document.querySelector(".accordion .section .titulo");
console.log(titulo);

titulo.addEventListener("click", alternar_conteudo);