// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.
// • Cada exercício deve ser encapsulado em uma função, e
// o menu deve executar essas funções;
// • O usuário poderá escolher qual exercício ele quer
// visualizar;
// • O usuário deverá digitar 0 para sair do menu;

function Login() {
    let login = prompt("Digite o seu usuário:")

    let senha = prompt("Digite a sua senha:")

    if (login == "admin" && senha == "senha123") {
        console.log("Login bem sucedido!")
    }
    else {
        console.log("Você não tem permissão de acesso!")
    }
}

function Semana() {
    let numero = window.prompt("Digite um número de 1 a 7")

    switch (numero) {
        case "1":
            console.log("Segunda-Feira")
            break;

        case "2":
            console.log("Terça-Feira")
            break;

        case "3":
            console.log("Quarta-Feira")
            break;

        case "4":
            console.log("Quinta-Feira")
            break;

        case "5":
            console.log("Sexta-feira")
            break;

        case "6":
            console.log("Sábado")``
            break;

        case "7":
            console.log("Domingo")
            break;

        default:
            console.log("Não é um número de 1 a 7")
            break;
    }
}

function ParImpar() {
    let numero = parseInt(prompt("Informe o número inteiro:"))
    if (numero % 2 == 0) {
        console.log("O número é par")
    }

    else {
        console.log("O número é impar")
    }
}

function Tabuada() {
    let num = parseFloat(prompt("Digite um numero:"))

    for (let indice = 1; indice <= 10; indice++) {
        console.log(indice * num)
    }

}

function SairdoJogo() {
    let num = parseInt(prompt("Digite um número:"))

    do {
        num = parseInt(prompt("Digite um número (Digite 0 para sair): "))
    } while (num !== 0)
    console.log("Você digitou 0. O program foi encerrado!")
}




window.parseInt(prompt("Digite um número de 1 a 5 para escolher o exercicio (É 0 para sair)"))
while (escolher !== "0") {
    switch (escolher) {
        case "1":
            Login()
            break;

        case "2":
            Semana()
            break;

        case "3":
            ParImpar()
            break;

        case "4":
            Tabuada()
            break;

        case "5":
            SairdoJogo()
            break;

        default:
            console.log ("Digite um número valido")
            break;
    }
}
