const arr = [];

function executar() { 

    let numero = Number(document.getElementById('numero').value);
    let selecao = document.getElementById('selecao').value;
    let msg = document.getElementById('msg');

    //somar todos os numeros
    if(selecao == "1"){
        arr.push(numero);
        let acumulador = 0;
        for(let i = 0; i < arr.length; i++){
            acumulador += arr[i];  
        }
        msg.innerHTML = acumulador;     
    }
    
    //inserir no inicio
    if(selecao == "2"){
            arr.unshift(numero);
            console.log(arr);
            msg.innerHTML = arr;
    }
    
    //inserir no fim
    if(selecao == "3") {
        arr.push(numero);   
        msg.innerHTML = arr;
    }
    
    //inverter lista
    if(selecao == "4"){
        arr.push(numero);
        arr.reverse();
        msg.innerHTML = arr;
    }
    
    //ordenar lista
    if(selecao == "5") {
        arr.push(numero);
        arr.sort();
        msg.innerHTML = arr;
    }
}