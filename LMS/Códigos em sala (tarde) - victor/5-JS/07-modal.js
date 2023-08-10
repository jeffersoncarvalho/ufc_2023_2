let button = document.querySelector("#abrir-modal");
let modal_overlay = document.querySelector(".modal-overlay");
let close = document.querySelector(".modal-overlay .close");

function abrir_fechar_modal(){
    modal_overlay.classList.toggle("active");
}

button.addEventListener("click", abrir_fechar_modal);
close.addEventListener("click", abrir_fechar_modal);

modal_overlay.addEventListener("click", function(){
    console.log("caiu aqui!");
    modal_overlay.classList.remove("active");
})