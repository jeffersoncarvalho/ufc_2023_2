console.log("Olá mundo!")

var x = 2
let y = 10
let soma = x + y
//console.log(soma)
//console.log("A soma de x e y é " + soma)
//console.log(`A soma de ${x} e ${y} é ${soma}`)

let lista = []
lista.push("Jefferson")
lista.push(34)
lista.push({curso:"SI",ira:7.3})
//console.log(lista)

/*for(let i=0;i<lista.length;i++){
    console.log(lista[i])
}*/

/*let j=0
while (j<lista.length){
    console.log(lista[j])
    j++
}*/

function somar(x,y){
    return x + y
}

const multiplicar = function(x,y){
    return x * y
}

/*const subtrair = (x,y) => {
    return x - y
}*/

/*const subtrair = (x,y) => x - y*/

const subtrair = (x,y) => {
    let a = 10
    let b = 3
    return x*a - y*b
}
