alert("Digite um número");
let numeroSecreto = parseInt(Math.random() * 10  + 1);
let numeroDigitado = 0;
let tentativas = 1;

console.log(numeroSecreto);

console.log(`Resultado da comparação entre o chute e numero secreto: ${numeroDigitado == numeroSecreto}`);

while(numeroDigitado != numeroSecreto){
    numeroDigitado = prompt("Escolha um numero entre 1 e 100");

    if(numeroDigitado == numeroSecreto){
        break;
    }else if (numeroDigitado < 1 || numeroDigitado > 100){
        console.error('O numero digitado é menor do que 1 ou maior do que 40');
        alert('Digite um número entre 1 e 100 e tente novamente');

    }else if(numeroDigitado > numeroSecreto){
        alert(`O numero secreto é menor que o numero: ${numeroDigitado}`);
    }else{
        alert(`O numero secreto é maior que o numero: ${numeroDigitado}`);
    }
    tentativas++;
}
let palavraTentativa = tentativas > 1 ? 'tentivas': 'tentativa';

alert(`Parabéns você acertou o numero secreto =  ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);