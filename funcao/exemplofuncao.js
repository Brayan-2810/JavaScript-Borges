function cumprimento() {
    let NomePessoa = prompt("Digite seu nome: ")
    let horaAtual = new Date().getHours()

    if (horaAtual > 6 && horaAtual < 13) {
        alert("Boa tarde ") + NomePessoa
    } else if (horaAtual >= 13 && horaAtual < 18) {
        alert("Boa tarde " + NomePessoa)
    } else (
        alert("Boa noite " + NomePessoa)
    )
}

cumprimento()

let pessoa = {
    nome: "Bryan",
    idade: 17,
    sobrenome: "Oliveira",
    estado: "SP",
    cidade: "SCS"
}

console.log(pessoa.nome)
console.log(pessoa.idade)

for(let chave in pessoa){
    console.log(chave + ": " + pessoa[chave])
}