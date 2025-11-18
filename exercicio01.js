// let admin = window.prompt("Qual e seu nome?")
// let senha = window.prompt("Qual é sua senha?")


// switch (admin) {
//     case "Admin":
//         console.log("Você e o Admin. Prosiga!")
//         break;

//     default:
//         console.log("Você não e o Admin.")
//         break;
// }
// switch (senha) {
//     case "senha123":
//         console.log("Senha correta. Bem-sucedido!")
//         break;

//     default:
//         console.log("Senha incorreta. Tente novamente.")
//         break;
// }


let login = prompt("Digite o seu usuário:")

let senha = prompt("Digite a sua senha:")

if (login == "admin" && senha == "senha123") {
    console.log("Login bem sucedido")
}
else{
    console.log("Você não tem permissão de acesso!")
}