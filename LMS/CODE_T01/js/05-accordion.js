let div_titulo = document.querySelector(".section .title")
let div_conteudo = document.querySelector(".section .content")

const add_active_to_content = () => {
    div_conteudo.classList.toggle("active")
}

div_titulo.addEventListener("click",add_active_to_content)