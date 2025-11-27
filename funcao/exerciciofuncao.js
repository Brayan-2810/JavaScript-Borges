// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.

//Sintaxe - escrita do codigo

let opcaoEscolhido = 0;

do {
    opcaoEscolhido = parseInt(prompt(`
    ========= 👀 MENU DE EXERCÍCIOS 👀 ========
    
    Digite um número das opcões:
    0 - Sair
    1 - Login 
    2 - Semana 
    3 - Par ou Impar
    4 - Tabuada 
    5 - Calcúlo de IMC

    ==========================================
    `));

    switch (opcaoEscolhido) {
        case 0:
            alert("Volte sempre...");
            break;
        case 1:
            Login();
            break;
        case 2:
            Semana();
            break;
        case 3:
            ParImpar();
            break;
        case 4:
            Tabuada();
            break;
        case 5:
            IMC();
            break;

        default:
            alert("Opção inválida, escolha! Escolha uma opção que exista no nosso sistema");
            break;
    }
} while (opcaoEscolhido != 0);



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
            alert("Segunda-Feira")
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

function IMC() {
    let altura = Number.parseFloat(prompt("Informe sua altura (em metros)"))
    let peso = Number.parseFloat(prompt("Informe seu peso (em kg)"))

    let imc = peso / (altura * altura)

    console.log("Seu IMC é: " + imc)



    if (imc < 18.5) {
        console.log("Abaixo do peso")
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal;")
    }

    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso")
    }

    else if (imc >= 30 && imc <= 34.9) {
        console.log("Obsidade grau 1")
    }

    else if (imc >= 35 && imc <= 39.9) {
        console.log("Obesidade grau 2")
    }

    else {
        console.log("Obesidade grau 3")
    }
}