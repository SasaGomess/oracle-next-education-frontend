let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function exibirConsole(){
    console.log('O botao foi clicado');
}

function exibirAlerta(){
    alert('Eu amo JAVAAAA');
}

function perguntarCidade(){
    let resposta = prompt("Fale um nome da cidade do Rio de Janeiro");

    alert(`Estive em ${resposta} e lembrei de você`);
}

function soma(){
    let num1 = prompt("Digite o 1° numero");
    let num2 = prompt("Digite o 2° numero");
    let sum1 = parseInt(num1);
    let sum2 = parseInt(num2);
    let soma = sum1 + sum2;
    alert(`A soma é: ${soma}`)
}