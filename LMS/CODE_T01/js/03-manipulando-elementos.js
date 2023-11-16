//let div_teste = document.getElementById("teste")
let div_teste = document.querySelector("#teste")
div_teste.innerHTML = "Olá innerHTML com Query Selector"
div_teste.style.color = "blue"
div_teste.style.backgroundColor = "brown"

let div_classes = document.querySelectorAll(".class1") 
for(let i = 0; i< div_classes.length; i++){
    div_classes[i].innerHTML = "UFC Quixadá - Design Digital"
    if(i%2===0) div_classes[i].style.backgroundColor = "grey"
    else div_classes[i].style.backgroundColor = "yellow"
}

let input_professor = document.querySelector("#professor")
input_professor.value = "João Marcelo"
input_professor.type = "password"

let div_id2 = document.getElementById("id2")
div_id2.classList.add("class_color")
//div_id2.classList.remove("class_color")
div_id2.classList.toggle("class_color")
