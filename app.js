let amigos = [];
let list = selecionarElemento("#listaAmigos");

function adicionarAmigo() {
  let campoNome = selecionarElemento("#amigo").value;

  if (campoNome.trim() !== "") {
    amigos.push(campoNome);
    exibirAmigos();
  } else {
    alert("O campo não pode estar vazio!");
  }
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
