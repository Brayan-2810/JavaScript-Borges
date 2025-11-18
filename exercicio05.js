// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let numero01 = Number.parseFloat(prompt("Digite o primeiro número"))
let numero02 = Number.parseFloat(prompt("Digite o segundo número"))
let numero03 = Number.parseFloat(prompt("Digite o terceiro número"))

if (numero01 < numero02 && numero02 < numero03) {
    console.log ("A sequência está em ordem crescente"), numero01 , numero02 , numero03
}

else {
    console.log ("A sequência não está em ordem crescente")
}