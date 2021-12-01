const colors = ["blue", "yellow", "rgba(34, 129, 255)", "#f2f2f2"];

//set the consts we need to use
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//add eventlistener to change background color when clicked
btn.addEventListener('click', function(){
    //set a random number for iterate the array of colors
    const randomNumber = getRandomNumber();

    //change the body's and span color and according to the random number
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}