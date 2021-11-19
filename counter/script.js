//set initial value
let count = 0;

//select value and buttons
const value = document.querySelector('#value');

//selecionado com selectorAll gera uma nodelist, que pode ser utilizada com alguns metodos como arrayLike
const btns = document.querySelectorAll('.btn');

//forEach para que, quando clicar determinado botão, aconteça o evento selecionado
//btn é o parametro da função do forEach
btns.forEach((btn) => {
    btn.addEventListener('click', clicked)
});
//isso significa que, quando clicar em um botão, vai gerar uma ação contida na funcao clicked

//função do addEventListener para ficar mais legivel
function clicked (e) {
    const styles = e.currentTarget.classList;
    //lista as classes do botao selecionado

    //muda o valor mostrado na pagina, de acordo com o botao clicado
    if(styles.contains('decrease')) {
        count--;
    }else if(styles.contains('reset')) {
        count = 0;
    }else {
        count++;
    }

    //mudar a cor em caso negativo e positivo
    if(count > 0) {
        value.style.color = '#549bb3';
    }
    if(count < 0) {
        value.style.color = '#AB354B';
    }
    if(count === 0) {
        value.style.color = '#222';
    }
    
    value.textContent = count;
};