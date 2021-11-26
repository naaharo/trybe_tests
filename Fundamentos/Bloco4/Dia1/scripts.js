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
console.log ("\n \nExercício 2\n");

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
console.log ("\n \nExercício 3\n");

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
console.log ("\n \nExercício 4\n");

const num14 = -5;

if (num14 > 0){
  console.log ("positive");
}else if (num14 <0){
  console.log ("negative")
}else{
  console.log ("zero")
}

/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
console.log ("\n \nExercício 5\n");
