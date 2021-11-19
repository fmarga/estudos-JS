# Counter

Create a page with a counter, using three buttons to change the number on the screen.

To this challenge I needed to learn more about:

1. querySelector;
2. forEach();
3. addEventListener();
4. currentTarget property;
5. classList;
6. textContent

---

### Lógica do desafio:

Primeiro é preciso selecionar os valores que serão alterados, que serão:

1. o numero mostrado na tela
2. os botões (increase, reset e decrease). Aqui, selecionando com querySelectorAll gerará uma nodeList, que será utilizada como arraylike para utilizar métodos de array

Em seguida, será feito um forEach na nodeList, criando um evento de click, para que, assim que a pessoa clicar, o numero seja alterado de acordo com o botão selecionado

Para o addEventListener, que é necessário dar dois parametros (a ação e a função equivalente), criamos a função clicked (que achei melhor deixar fora do forEach para ficar mais legível). Nessa função ocorrerão as determinadas ações:

1. selecionamos em uma constante o botão clicado e mostramos as classes contidas nele;
2. com isso, fazemos a primeira condicional if, que testará se determinada classe existe no botão clicado, e com isso o valor aumentará ou diminuirá;
3. depois que já tivermos a resposta da primeira condicional, fazemos a segunda condicional, que altera a cor do numero mostrado em tela de acordo com o botão selecionado (cor negativa e cor positiva);
4. por último, fora das condicionais, alteramos o valor mostrado em tela, para que mostre o resultado da condicional
