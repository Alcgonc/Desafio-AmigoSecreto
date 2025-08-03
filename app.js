//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let nomeAmigoSecreto;
let numeroAmigoSecreto;
let nomeAmigo;
let nomeDoSorteador;

function adicionarAmigo() {
    nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert('Campo vazio. Forneça um nome para ser incluido');
    }
    else{
        if (listaAmigos.includes(nomeAmigo.toUpperCase())) {
            alert('Nome  ' + nomeAmigo.toUpperCase() + '  já foi incluido!')
            limparCampo()
        }
        else{
            listaAmigos.push(nomeAmigo.toUpperCase());
            limparCampo();
        }
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0){
        alert('Não existem nomes para serem sorteados. Primeiro registre seus amigos.')
    }
    else{
        nomeDoSorteador = prompt('Informe, por favor, seu nome.')
        sortear()
        while (nomeAmigoSecreto == nomeDoSorteador.toUpperCase() && quantidadeAmigos > 1) {
            sortear()
        }
        alert('Seu amigo amigo secreto é: ' + nomeAmigoSecreto);
        listaAmigos.splice(numeroAmigoSecreto, 1);
    }
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function sortear() {
    quantidadeAmigos = listaAmigos.length;
    numeroAmigoSecreto = parseInt(Math.random() * quantidadeAmigos);
    nomeAmigoSecreto = listaAmigos[numeroAmigoSecreto];
}