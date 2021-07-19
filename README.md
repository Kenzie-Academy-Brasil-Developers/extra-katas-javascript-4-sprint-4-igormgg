# Extra: Katas de JavaScript 4

## Visão Geral

Para começar, acesse [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/getting-started-with-javascript/s_js-katas-4), faça o fork e clone o repo.


Um [kata](https://en.wikipedia.org/wiki/Kata_(programming)) é um exercício individual onde você pratica uma habilidade de programação repetidamente. Você usará os katas nesta avaliação para praticar a escrita de funções Javascript que usam loops, condicionais, expressões e arrays.

Você criará uma única página para exibir o resultado de cada uma de suas funções com um cabeçalho identificando cada exercício individual seguido de sua solução. **Todos os resultados dos katas individuais precisam ser exibidos usando `document.createElement()` e métodos associados.** Depois de adicionar o resultado da sua função à página, cada função deve usar a sentença 'return' para retornar seu resultado.


Dica: Ao exibir um array, use `JSON.stringify()` para 'embelezar' o resultado. Por exemplo, digamos que você usou `document.createElement()` e o armazenou em uma variável chamada `newElement`. Para exibir o `lotrCitiesArray` neste elemento, você pode chamar:

```js
newElement.textContent = JSON.stringify(lotrCitiesArray);
```

**Exemplo**

```js
   let header = document.createElement("div");
   header.textContent = "Kata 0";
   document.body.appendChild(header);
 
   function kata0() {
       let newElement = document.createElement("div");
       newElement.textContent = JSON.stringify(lotrCitiesArray);
       document.body.appendChild(newElement)
 
       return lotrCitiesArray; // Não esqueça de retornar a saída
   }
``` 

Não se esqueça de chamar sua função depois de defini-la!

```js
kata0();
```

Faça como no Kata 3 e crie uma função chamada "showResults" que receba o resultado por parâmetro e mostre o valor no seu DOM.

Os katas usarão a seguinte amostra de variáveis, que já estarão disponíveis para você. **A idéia é que você altere essas variáveis durante o desenvolvimento dos Katas, NÃO se preocupe em fazer cópias seguras dos arrays.**:

`const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";`

`const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];`

`const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";`

## Katas

1. Escreva uma função que **retorna** um array com as cidades em 'gotCitiesCSV'. Lembre-se de também **adicionar os resultados à página**.
2. Escreva uma função que **retorna** um array das palavras na frase contida em 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
3. Escreva uma função que **retorna** uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'. Lembre-se de também **adicionar os resultados à página**.
4. Escreva uma função que **retorne** uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
5. Escreva uma função que **retorna** um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
6. Escreva uma função que **retorna** um array com as 5 últimas cidades de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
7. Escreva uma função que **retorna** um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
8. Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' modificado. Lembre-se de também **adicionar os resultados à página**.
9. Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' modificado. Lembre-se de também **adicionar os resultados à página**.
10. Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor' e **retorne** o novo 'lotrCitiesArray' modificado. Lembre-se de também **adicionar os resultados à página**.
11. Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' modificado. Lembre-se de também **adicionar os resultados à página**.
12. Escreva uma função que usa 'slice' para **retornar** uma string com os primeiros 14 caracteres de 'bestThing'.  Lembre-se de também **adicionar os resultados à página**.
13. Escreva uma função que usa 'slice' para **retornar** uma string com os 12 últimos caracteres de 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
14. Escreva uma função que usa 'slice' para **retornar** uma string com os caracteres entre as posições 23 e 38 de 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
15. Escreva uma função que faz exatamente a **mesma coisa que a #13** mas use o método 'substring' em vez de 'slice'. Lembre-se de também **adicionar os resultados à página**.
16. Escreva uma função que faça exatamente a **mesma coisa que o #14** mas use o método 'substring' em vez de 'slice'. Lembre-se de também **adicionar os resultados à página**.
17. Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
18. Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray' que foi removida no #17 e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
19. Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
20. Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray' que foi removida no #19 e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.

# Requisitos

1. Cada função deve exibir um resultado em uma página.
2. Cada função deve **retornar** um valor.
3. Cada função deve ter o nome `kata1()`, `kata2()` e assim por diante.
4. Seu arquivo deve ter o nome `katas4.js`

# Bônus Opcional (6 pts)

1. Escreva uma função que encontre e **retorne** o índice 'only' dentro do array 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
2. Escreva uma função que encontre e **retorne** o índice da última palavra de 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
3. Escreva uma função que encontre e **retorne** um array de todas as cidades de 'gotCitiesCSV' que tiverem vogais duplicadas ('aa', 'ee', etc.). Lembre-se de também **adicionar os resultados à página**.
4. Escreva uma função que encontre e **retorne** um array com todas as cidades de 'lotrCitiesArray' que terminem em 'or'. Lembre-se de também **adicionar os resultados à página**.
5. Escreva uma função que encontre e **retorne** um array com todas as palavras de 'bestThing' começando com 'b'. Lembre-se de também **adicionar os resultados à página**.
6. Escreva uma função que **retorne** 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Mirkwood'. Lembre-se de também **adicionar os resultados à página**.
7. Escreva uma função que **retorne** 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Hollywood'. Lembre-se de também **adicionar os resultados à página**.
8. Escreva uma função que **retorne** o índice de 'Mirkwood' em 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
9. Escreva uma função que encontre e **retorne** a primeira cidade de 'lotrCitiesArray' que tiver mais de uma palavra. Lembre-se de também **adicionar os resultados à página**.
10. Escreva uma função que inverta a ordem de 'lotrCitiesArray' e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
11. Escreva uma função que ordene 'lotrCitiesArray' alfabeticamente e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.
12. Escreva uma função que ordene 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo, a cidade mais curta aparece primeiro) e **retorne** o novo array. Lembre-se de também **adicionar os resultados à página**.

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/s\_js-katas-4) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.
