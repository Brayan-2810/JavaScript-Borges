let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML


novoParagrafo.textContent = "Paragrafo criado via JS"; //poe um conteudo no p

secao[0].appendChild(novoParagrafo);

// document.body.appendChild(novoParagrafo);
