

let elementoPorID = document.getElementById("formulario")
let elementosPorClass = document.getElementsByClassName("texto")


let elementoPorTag = document.getElementsByTagName("a")
console.log(elementosPorClass);
console.log(elementosPorClass[0]);

console.log(elementoPorID);
console.log(elementoPorTag[0].textContent);
console.log(elementoPorTag[0].textContent);


elementoPorTag[0].textContent = "Video Engraçado";
//modifica o conteudo do elemento
elementoPorTag[0].style.color = "red";
elementoPorTag[0].style.fontsize = "30px";
//exiba o 2 elemento da variavel elementos
// //crie uma variavel que tenha o valor de um elemnto buscado pelo nome de tag
//acesse a propriedade innerText da variavel elementoPorTag (e uma array), vão ter que acessar
//pela posicao do elemento e exiba no console.log

// acesse a propriedade style.color e atribui uma cor red em formato string para a posicao 0 da variavel elementoPorTag











