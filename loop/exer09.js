// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let num = parseInt (prompt("Digite um número:"))

do{
    num = parseInt(prompt("Digite um número (Digite 0 para sair): "))
}while(num !==0)
console.log("Você digitou 0. O program foi encerrado!")
