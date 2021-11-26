/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. */
console.log ("Exercício 1\n");

const a = 5;
const b = 3;

let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

console.log (add);
console.log (sub);
console.log (mult);
console.log (div);
console.log (mod);

/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */
console.log ("\n*********************************************************************\nExercício 2\n");

const num12 = 5;
const num22 = 3;

if (num12>num22){
  console.log ("O primeiro número é maior.")
}else if (num22>num12){
  console.log ("O segundo número é maior.")
}else{
  console.log ("Os números são iguais.")
}

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */
console.log ("\n*********************************************************************\nExercício 3\n");

const num13 = 5;
const num23 = 3;
const num33 = 7;

if (num13>num23 && num13>num33){
  console.log ("O primeiro número é maior.")
}else if (num23>num13 && num23>num33){
  console.log ("O segundo número é maior.")
}else if (num33>num13 && num33>num23){
  console.log ("O terceiro número é maior.")
}else if (num13===num23 && num13>num33){
  console.log ("O primeiro e o segundo número são iguais e são os maiores.")
}else if (num13===num33 && num13>num23){
  console.log ("O primeiro e o terceiro número são iguais e são os maiores.")
}else if (num23===num33 && num23>num13){
  console.log ("O segundo e o terceiro número são iguais e são os maiores.")
}else{
  console.log ("Todos os números são iguais")
}

/* Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
console.log ("\n*********************************************************************\nExercício 4\n");

const num14 = -5;

if (num14 > 0){
  console.log ("positive");
}else if (num14 <0){
  console.log ("negative")
}else{
  console.log ("zero")
}

/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
console.log ("\n*********************************************************************\nExercício 5\n");

const num15 = 60;
const num25 = 30;
const num35 = 90;

let somaAng = num15 + num25 + num35 === 180;

if (somaAng===true && num15>0 && num25>0 && num35>0){
  console.log (somaAng);
}else if (somaAng===false && num15>0 && num25>0 && num35>0){
  console.log (somaAng);
}else{
  console.log ("#####ERROR##### INVALID INPUT")
}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

 Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.*/
 console.log ("\n*********************************************************************\nExercício 6\n");

 let peca = "Queen";

 peca = peca.toLowerCase ();

 if (peca==="rei" || peca==="king"){
   console.log ("Uma casa para qualquer direção. | One square in any direction.");

 }else if (peca==="rainha" || peca==="queen"){
   console.log ("Qualquer direção, qualquer número de casas. | Any direction, any numbers of squares");

 }else if (peca==="torre" || peca==="rook"){
   console.log ("Horizontal ou vertical, qualquer número de casas. | Horizontally or vertically, any number of squares.");

 }else if (peca==="bispo" || peca==="bishop"){
   console.log ("Diagonal, qualquer número de casas. | Diagonally any number of squares.");

 }else if (peca==="cavalo" || peca==="knight"){
   console.log ("Forma de 'L', pula sobre outras peças. | In an ‘L’ shape’, able to jump over other pieces.");

 }else if (peca==="peao" || peca==="peão" || peca==="pawn"){
   console.log ("Vertical, uma casa (duas se não tiver se movido ainda). Come na diagonal frontal. | Vertically forward one square (two squares if they have not yet moved). capture one square diagonally in a forward direction.");

 }else{
   console.log ("#####ERROR##### INVALID INPUT");
 }

 /* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
console.log ("\n*********************************************************************\nExercício 7\n");

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . */
console.log ("\n*********************************************************************\nExercício 8\n");

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . */
console.log ("\n*********************************************************************\nExercício 9\n");

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */
console.log ("\n*********************************************************************\nExercício 10\n");

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */ 
console.log ("\n*********************************************************************\nExercício 11\n");
