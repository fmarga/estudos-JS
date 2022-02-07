const btn = document.querySelector("#btn");
const input = document.querySelector("#cep");
const div = document.querySelector(".resultado");

btn.addEventListener("click", clicou);

function clicou(event) {
  event.preventDefault();
  const cep = input.value;
  procuraCep(cep);
}

function procuraCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resposta) => resposta.json())
    .then((dado) => {
      div.innerText = `Você mora em ${dado.localidade}-${dado.uf}, na ${dado.logradouro}`;
    });
}
