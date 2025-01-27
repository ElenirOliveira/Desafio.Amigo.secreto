// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema proposto.  Leia atentamente a descrição do problema e desenvolva a sua solução!')   
let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        amigoInput.value = '';
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const amigosSorteados = [...amigos];
    amigosSorteados.sort(() => Math.random() - 0.5);

    amigosSorteados.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} é o amigo secreto de ${amigosSorteados[(index + 1) % amigosSorteados.length]}`;
        resultado.appendChild(li);
    });
}
