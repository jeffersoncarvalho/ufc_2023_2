function foi_clicado(){
    console.log("Funfou!");
}

let botao2 = document.querySelector("#botao2");
botao2.onclick = foi_clicado;

function mudar_div(){
    let div = document.querySelector(".teste");
    div.classList.toggle("active");
}

let botao3 = document.querySelector("#botao3");
botao3.addEventListener("click", mudar_div);