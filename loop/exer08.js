let idade = parseInt (prompt("Digite sua idade:"))

while (idade < 18){
       idade = parseInt(prompt("Você é menor de idade, digite outra idade: "))
        console.log("Você é menor de idade. Tente novamente" )
       }

       console.log("Você é maior de idade. Sua idade é:" + idade)

