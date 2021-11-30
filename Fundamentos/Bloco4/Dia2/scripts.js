/* Iremos utilizar esse array para realizar os exercícios do 1 ao 7: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
console.log ("Exercício 1:\n");

for (let num11 of numbers){
  console.log (num11);
}


/* 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
console.log ("\n\n****************************************************************\nExercício 2:\n");

let sum = 0;

for (let i2=0; i2<numbers.length; i2++){
  sum += numbers[i2];
}
console.log("A soma dos valores é: " + sum)


/* 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */
console.log ("\n\n****************************************************************\nExercício 3:\n");

let mid = sum/numbers.length;

console.log ("Média Aritimética: " + mid);


/* 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */
console.log ("\n\n****************************************************************\nExercício 4:\n");

if (mid>20){
  console.log ("valor maior que 20");
}else {
  console.log ("valor menor ou igual a 20");
}


/* 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
console.log ("\n\n****************************************************************\nExercício 5:\n");

let hig = numbers[0];

for (let i5=0; i5<numbers.length; i5++){
  if (numbers[i5]>=hig){
    hig = numbers[i5];
  }
}
console.log ("Maior valor: " + hig);


/* 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
console.log ("\n\n****************************************************************\nExercício 6:\n");

let poggers = [];

for (let i6=0; i6<numbers.length; i6++){
  if (numbers[i6]%2!==0){
    poggers.push (numbers[i6]);
  }
}
if (poggers.length===0){
  console.log ("nenhumvalor ímpar encontrado");
}else{
  console.log (poggers.length + " valores ímpares encontrados");
}


/* 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
console.log ("\n\n****************************************************************\nExercício 7:\n");

let low = numbers[0];

for (let i5=0; i5<numbers.length; i5++){
  if (numbers[i5]<=low){
    low = numbers[i5];
  }
}
console.log ("Maior valor: " + low);


/* 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */
console.log ("\n\n****************************************************************\nExercício 8:\n");

omegaLul = [];

for (let i8=0; i8<25; i8++){
  omegaLul.push (i8 + 1);
}
console.log ("Array:\n" + omegaLul.join("; "));


/* 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */
console.log ("\n\n****************************************************************\nExercício 9:\n");

let kappa = [];

for (let i9=0; i9<omegaLul.length; i9++){
  kappa.push (omegaLul[i9]/2);
}
console.log ("Array original:\n" + omegaLul.join("; "));
console.log ("\nDividido por 2:\n" + kappa.join("; "));