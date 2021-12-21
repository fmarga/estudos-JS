//adicionar evento quando a pagina for carregada
document.addEventListener('DOMContentLoaded', () => {

    //gerar um array com os quadrados do tabuleiro
    let quadrados = document.querySelectorAll('.quadrado');

    //adicionar um evento na peça que for clicada
    quadrados.forEach( (quadrado) => {
        quadrado.addEventListener('click', clicou)
    });

})

//essa funcao vai chamar a funcao que altera o quadrado clicado
function clicou(event) {
    let quadrado = event.target;
    let posicao = quadrado.id;

    if(handleMove(posicao)) {

        setTimeout(() => {
            alert('Game Over - O jogador vencedor foi ' + vezJogador);
        }, 10);
        
    }
    atualizaQuadrado(posicao);
}
//essa funcao seleciona o quadrado clicado e acrescenta no html a div composta pelo simbolo correto do jogador
function atualizaQuadrado(posicao) {
    let quadrado = document.getElementById(posicao.toString());
    let simbolo = board[posicao];
    quadrado.innerHTML = `<div class='${simbolo}'></div>`;
}

//funcao acionada com o evento onclick no html, para resetar o jogo
function reiniciarJogo() {
    atualizaTodosQuadrados();
    for(let i = 0; i < board.length; i++) {
        board[i] = '';
    }
    vezJogador = 0;
    gameOver = false;
    
}

//funcao que faz com que todos os quadrados fiquem vazios para que o jogo seja reiniciado
function atualizaTodosQuadrados() {
    let quadrados = document.querySelectorAll('.quadrado');

    quadrados.forEach((quadrado) => {
        let posicao = quadrado.id;
        let simbolo = board[posicao];

        if(simbolo != '') {
            quadrado.innerHTML = '';
        }
    })
}