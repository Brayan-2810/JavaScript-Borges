//Alert - Apresenta uma mensagem na tela
// window.alert("Olá Turma do Borges")
// //Confirme - Pergunta com OK/CANCELAR (retorna um True ou false)
// window.confirm("O Jonas vai Casar!")
// //Prompt - Pega o texto da tela
// window.prompt("Qual o seu nome?")

//Comentario em likha
/*
Comentario em texto
*/

// console.log("Multimidia")

// let nome = prompt("Informe o seu nome")

// console.log("Bem-vindo!" + nome)

// let numero1 = Number.parseInt(prompt("Digite o primeiro número"))
// let numero2 = Number.parseInt(prompt("Digite o segundo número"))

// let resultado = numero1 + numero2

// console.log(resultado)

// let numero1 = Number.parseFloat(prompt("Digite o primeiro número"))
// let numero2 = Number.parseFloat(prompt("Digite o segundo número"))

// let resultado = numero1 + numero2

// console.log(resultado)

let idade = window.prompt("Qual sua idade?")

if (idade >= 18) {

} else {
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de Idade!")
        break;

    case "27":
        console.log("Está perto dos 30")
        break;

    default:
        console.log("Nada a dizer")
        break;
}
