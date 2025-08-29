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
//Exercício 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoImc(altura, massa) {
    return massa / altura;
}

calculoImc(1.70, 70);

//Exercício 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
    let numeroMultiplicar = numero - 1;
    let resultado = 0;
    while(numeroMultiplicar >= 1){
        resultado =+ numero * numeroMultiplicar;
        numeroMultiplicar--;
    }
    return resultado;
}
fatorial(5);
//Exercicio 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversorMoedas(dolar) {
    return dolar * 5.41;
}
conversorMoedas(20);

// Exercicio 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculoPerimetroSala(altura, largura) {
    let alturaAoQuadrado = Math.pow(altura);
    let larguraAoQuadrado = Math.pow(largura);

    return alturaAoQuadrado + larguraAoQuadrado;
}
calculoPerimetroSala(5, 6);

// Exercicio 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculoPerimetroCirculo(raio){
    return raio * 3.14;
}
calculoPerimetroCirculo(10);

// Exercicio 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    for (let index = 1; index <= numero; index++) {
        let resultado = numero * index;
        console.log(`${numero} X ${index} = ${resultado}`)
    }
}
tabuada(7);

// Exercicio 1 - Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// Exercicio 2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let listaLinguagensP = ['JavaScript','C','C++', 'Kotlin', 'Python'];

// Exercicio 3 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
listaLinguagensP.push('Java');
listaLinguagensP.push('Ruby');
listaLinguagensP.push('Golang');

// Exercicio 4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes = ['Sabrina', 'Gabriela', 'Julia'];
console.log(nomes[0]);

// Exercicio 5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(nomes[1]);

// Exercicio 6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(nomes.length - 1);