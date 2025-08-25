/* exercicio 1
let diaDigitado = prompt('Qual dia da semana?');

if(diaDigitado == "Domingo" || diaDigitado == "domingo" || diaDigitado == "sabado" || diaDigitado == "Sabado"){
    alert('Bom final de semana');
} else {
    alert('Boa Semana!')
}
 exercicio 1 - Contadores
let contador = 0;
while(contador < 10){
    alert(`Numero: ${contador}`);
    contador++;
}

// exercicio 2
let contador2 = 10;
while(contador2 >= 0){
    alert(`Numero: ${contador2}`);
    contador2--;
}

// exercicio 3
let contador3 = prompt('Digite um numero para contagem regressiva!');

while(contador3 > 0){
    alert(`Contagem regressiva: ${contador3}...`);
    contador3--;
}
// exercicio 4
let contador4 = prompt('Digite um numero para contagem progressiva');
let contador5 = 0;

while(contador4 >= contador5){
    alert(`O valor é ${contador5}`);
    contador5++;
}*/

//exercicio - 5 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemQueMaisGosta = prompt("Qual a linguagem de programação que você mais gosta?");

console.log(`Linguagem que mais gosta: ${linguagemQueMaisGosta}`);

// exercicio - 6 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt("Digite sua idade ");

let result = idade > 18 ? 'O usuário é maior de idade' : 'O usuário é menor de idade';

alert(result);

// exercicio - 7 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt("Digite um numero");

if(numero > 0){
    alert("O numero é positivo");
}
else if (numero < 0){
    alert("O numero é negativo");
} else{
    alert("O numero é igual a zero");
}
// exercicio 8 - Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 1;

while(contador <= 10){
    alert(contador);
    contador++;
}
// exercicio 9 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 6.6;

if(nota >= 7.0){
    alert("Aprovado");
}else if (nota >= 6.0){
    alert("Media");
} else{
    alert("Reprovado");
}

// exercicio 10 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let aleatorio = Math.random();
console.log(aleatorio)

// exercicio 11 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numero10 = parseInt(Math.random() * 10 + 1);

console.log(numero10)

// exercicio 12 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numero1000 = parseInt(Math.random() * 1000 + 1);

console.log(numero1000);