function alternar_conteudo(){
    // Fechar todos os conteúdos antes de abrir o correto
    let conteudos = document.querySelectorAll(".accordion .section .conteudo");
    for(let conteudo of conteudos){
        conteudo.classList.remove("active");
    }

    // this contém o elemento que gerou o evento de clique
    console.log(this);
    let conteudo_irmao = this.nextElementSibling;
    conteudo_irmao.classList.toggle("active");
}

let titulos = document.querySelectorAll(".accordion .section .titulo");
console.log(titulos);

for(let titulo of titulos){
    titulo.addEventListener("click", alternar_conteudo);
}