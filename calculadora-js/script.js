function calculadora() {
    //define opçoes de operação
    const operacao = Number(prompt(`Escolha a operação que deseja realizar:\n1 - para adição (+)\n2 - para subtração (-)\n3 - para multiplicação (*)\n4 - para divisão (/)`));
    //valida operação
    if(!operacao || operacao > 7) {
        alert('Operação inválida, escolha novamente uma opção válida');
        novaOperacao();
    }else {
        //define variavel para os numeros do tipo number
        const n1 = Number(prompt('Digite o primeiro número'));
        const n2 = Number(prompt('Digite o segundo número'));
        let resultado;

        //valida numeros
        if(!n1 || !n2) {
            alert('ERRO - parâmetros inválidos!');
            calculadora();
        }else {
            //define as funções a serem realizadas
            function soma() {
                resultado = n1 + n2;
                alert(`O resultado da soma entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`O resultado da subtração entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`O resultado da multiplicação entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao()
            }
            function divisao() {
                resultado = n1 / n2;
                alert(`O resultado da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao()
            }

            function novaOperacao() {
                const novaOp = prompt(`Deseja realizar nova operação?\n1 - Sim\n2 - Não`);

                if(novaOp == 1) {
                    calculadora();
                }else if(novaOp == 2){
                    alert(`A calculadora está sendo finalizada.`);
                }else{
                    alert('Por favor, digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    }
    
    //declara operações
    switch(operacao) {
        case 1:
            soma()
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        default:
            alert('Você precisa escolher a operação a ser realizada');
            calculadora();
            break;
    }
}
calculadora();