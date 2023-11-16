///sempre retornando um elemento único por id
let div_id1 = document.getElementById("id1")
//console.log(div_id1)

//retornando uma lista
let div_list = document.getElementsByTagName("div")
//console.log(div_list.length)
//console.log(div_list)
div_list = 2

let class_list = document.getElementsByClassName("teste")
//console.log(class_list)

//usando query selector
let div_div = document.querySelector(".teste .teste")
//console.log(div_div)

let todas_divs = document.querySelectorAll(".teste")
console.log(todas_divs)