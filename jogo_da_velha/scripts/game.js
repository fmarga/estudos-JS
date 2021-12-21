//iniciar as variaveis
let board = ['', '', '', '', '', '', '', '', '']; //esse array tem 9 elementos, 1 para cada quadrado do tabuleiro
let vezJogador = 0; //jogador 0 é 'o' e jogador 1 é 'x'
let simbolos = ['o', 'x'];
let gameOver = false;

//array com todas as posicoes possiveis de vencer (3 elementos iguais nessas posicoes)
const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//essa funcao vai acrescentar o simbolo de 'o' ou 'x' no quadrado que for clicado
function handleMove(posicao) {

    if(gameOver) {
        return;
    }
 
    if(board[posicao] == '') {
        board[posicao] = simbolos[vezJogador];
        //troca a vez do jogador de acordo com os simbolos

        gameOver = isWin();

        vezJogador = (vezJogador == 0) ? 1 : 0;
        
    }
    
    return gameOver;
}


function isWin() {
    
    for(let i = 0; i < winStates.length; i++) {
        let sequencia = winStates[i];

        let posicao1 = sequencia[0];
        let posicao2 = sequencia[1];
        let posicao3 = sequencia[2];

        if( board[posicao1] == board[posicao2] && board[posicao1] == board[posicao3] && board[posicao1] != '') {
            return true;
        }
    }

    return false;
}

