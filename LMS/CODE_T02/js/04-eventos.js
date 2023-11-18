let btn1 = document.getElementById("btn1")

function mudarBkg(){
    btn1.classList.toggle("cor-de-fundo")
}

let btn2 = document.getElementById("btn2")
btn2.addEventListener("dblclick",mudarBkg)