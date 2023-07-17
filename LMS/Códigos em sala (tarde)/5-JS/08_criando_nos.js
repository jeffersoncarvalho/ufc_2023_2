let ul = document.querySelector("#lista-seriado");
let submit = document.querySelector("#submit");
let input_seriado = document.querySelector("#seriado");

function adicionar_seriado(event){
    event.preventDefault();
    let texto = input_seriado.value;

    let li = document.createElement("li");
    let text_li = document.createTextNode(texto);

    li.appendChild(text_li);
    ul.appendChild(li);
}
submit.addEventListener("click", adicionar_seriado);
