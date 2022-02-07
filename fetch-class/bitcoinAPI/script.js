const venda = document.querySelector("#venda");
const compra = document.querySelector("#compra");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((resposta) => resposta.json())
    .then((btc) => {
      compra.innerText = ("Compra R$ " + btc.BRL.buy).replace(".", ",");
      venda.innerText = ("Venda R$ " + btc.BRL.sell).replace(".", ",");
    });
}

fetchBtc();
