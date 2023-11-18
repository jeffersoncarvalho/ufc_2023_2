let div_titulos = document.querySelectorAll(".section .title")
//let div_contents = document.querySelectorAll(".section .content")
//V0
/*for(let i=0;i<div_titulos.length;i++){
    div_titulos[i].addEventListener("click",()=>add_active_to_content(i))
}

const add_active_to_content = (indice) => {
    div_contents[indice].classList.toggle("active")
}*/
//V1

const add_active_to_content = (titulo) => {
    let content = titulo.nextElementSibling
    content.classList.toggle("active")
}

for(let titulo of div_titulos){
    titulo.addEventListener("click",()=>add_active_to_content(titulo))
}


