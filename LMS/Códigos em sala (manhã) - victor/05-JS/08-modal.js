function abrir_modal(){
    let overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
}

function fechar_modal(){
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
}

let botao = document.querySelector("#abrir-modal");

botao.addEventListener("click", abrir_modal);

let botao_fechar = document.querySelector(".modal-container .modal-header .fechar");
console.log(botao_fechar);
botao_fechar.addEventListener("click", fechar_modal)
