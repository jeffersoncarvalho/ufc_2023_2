let botao = document.getElementById("id1")

function mudarBackground() {
    botao.classList.toggle("cor-de-fundo")
}

let botao_id2 = document.getElementById("id2")
//botao_id2.onclick = mudarBackground
//botao_id2.onclick = () => mudarBackground()
botao_id2.addEventListener("click",mudarBackground)