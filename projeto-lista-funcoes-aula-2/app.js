let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Parabéns você acertou!');

        let mensagemTentativas = `Você descobriu numero secreto com ${tentativas} ${palavraTentativa}.`
        exibirTextoNaTela('p', mensagemTentativas);

       document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        
        exibirTextoNaTela('p', 'O numero secreto é menor');

    } else {

        exibirTextoNaTela('p', 'O numero secreto é maior');

    };
    tentativas++;
    limparCampo();
}

function gerarAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)) {// includes metodo especifico do javascript
        return gerarAleatorio();
    } else{
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}


function limparCampo() {
    // Pegando o input em si para manipular o valor de dentro. Por isso não foi pega a variavel chute que so recebe o valor de dentro do input
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciar() {
    numeroSecreto = gerarAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}