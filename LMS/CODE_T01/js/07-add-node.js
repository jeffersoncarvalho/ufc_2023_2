let ul = document.querySelector("#seriados")
let input = document.querySelector("#seriado")
let submit = document.querySelector("#submit")

function add_seriado(event){
    event.preventDefault()
    let texto_seriado = input.value
    let li = document.createElement("li")

    let texto_do_li = document.createTextNode(texto_seriado)
    li.appendChild(texto_do_li)
    ul.appendChild(li)
}

submit.addEventListener("click",add_seriado)