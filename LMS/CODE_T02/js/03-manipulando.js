//let div_id_teste = document.getElementById("teste")
let div_id_teste = document.querySelector("#teste")
div_id_teste.innerHTML = "Olá mundo!"
div_id_teste.style.color = "blue"
div_id_teste.style.backgroundColor = "cyan"

let lista_classes = document.getElementsByClassName("class1")
for(let i=0;i<lista_classes.length;i++){
    if(i%2===0) lista_classes[i].style.backgroundColor = "grey"
    else lista_classes[i].style.backgroundColor = "yellow"
}

let professor = document.querySelector("#professor")
professor.value = "João"
professor.type = "password"

let  minha_classe = document.getElementById("minha_classe")
minha_classe.classList.add("class_color")
//minha_classe.classList.remove("class_color")
minha_classe.classList.toggle("class_color")
