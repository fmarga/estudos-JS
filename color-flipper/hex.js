const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//set the consts for the button and the color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//add eventlistener to change the color when clicked
btn.addEventListener('click', function(){
    //set a let that wil sum values of the iteration
    let hexColor = '#';
    //for loop to generate the hex color code
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    //changing the color with the created code
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

//get a function to generate a random number
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

/* we can also make the getRandomNumber function be stored at a variable, not necessarily make a function with the action (for both the methods, including the app.js file):

    let getRandomNumber = Math.floor(Math.random() * hex.length);
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber];
    };

*/