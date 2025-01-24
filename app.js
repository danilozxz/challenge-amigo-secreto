let amigos = [];
let list = selecionarElemento("#listaAmigos");

function adicionarAmigo() {
  let campoNome = selecionarElemento("#amigo").value;

  if (campoNome.trim() !== "") {
    amigos.push(campoNome);
    exibirAmigos();
    alerta.classList.add("remove-alerta");
  } else {
    let alerta = selecionarElemento("#alerta");
    alerta.classList.remove("remove-alerta");
  }

  selecionarElemento("#amigo").value = "";
}

function exibirAmigos() {
  list.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    list.appendChild(item);
  }
}

function selecionarElemento(elemento) {
  return document.querySelector(elemento);
}

function sortearAmigo() {

  if (amigos.length < 2) {
      alert('Para sortear um amigo é necessário ter ao menos 2 amigos na lista.')
    } else {
      let resultado = selecionarElemento("#resultado");
      const amigoSorteado = Math.floor(Math.random() * amigos.length);
      resultado.innerHTML =  "O amigo secreto sorteado é: " + amigos[amigoSorteado];
  }
}
