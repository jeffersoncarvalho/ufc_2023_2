//console.log(" Olá Javascript TESTE")

//básico matemática e variáveis
var x = 2
let y = 10
let soma = x + y
//console.log(soma)
//console.log("A soma de x + y é : " + soma)
//console.log(`A soma de ${x} + ${y} é ${soma}.`)

//listas
let lista = []
//console.log(lista.length)
lista.push("Pedro")
lista.push(1)
//console.log(lista.length)

//objetos
let aluno = { nome: "Jefferson", idade: 18, IRA: 5.6 }
lista.push(aluno)
console.log(lista)

//laços
/*for(let i=0; i < lista.length; i++){
    console.log("-->" + lista[i])
}*/

/*let j = 0
while (j<lista.length) {
    console.log("--> " + lista[j])
    j++
}*/

function somar(x,y) {
    return x + y
}

const subtrair = function(x,y) {
    return x - y
}

const multiplicar = (x,y) => { 
    let a = 10
    let b = 3
    return (x+a) * (y+b)
}

//const multiplicar = (x,y) => x * y


//console.log(`chamando a função somar: ${somar(4,5)}`)