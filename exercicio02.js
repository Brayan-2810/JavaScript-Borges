
let numero = Number.parseInt(prompt("Digite um número de 1 a 7"))
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
        console.log("Sábado")
        break;

    case "7":
        console.log("Domingo")
        break;

    default:
        console.log("Não é um número de 1 a 7.")
        break;
}
