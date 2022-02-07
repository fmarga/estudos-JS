const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", createText);

function createText(event) {
  event.preventDefault();
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((joke) => {
      p.innerText = joke.value;
    });
}
