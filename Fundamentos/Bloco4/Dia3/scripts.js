/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */
console.log ("Exercício 1:\n");

let num11 = 7;
let arr11 = [];

for (let ia=1; ia<=num11; ia++){
  arr11.push ("*");
}
for (let ib=0; ib<num11; ib++){
  console.log (arr11.join(""));    
}


/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */
console.log ("\n\n****************************************************************\nExercício 2:\n");

let num12 = 5;
let arr12 = [];

/* o código vale não apenas para 5 '*' de base mas para qualquer quantidade */
for (let i2=1; i2<=num12; i2++){
  arr12.push ("*");
  console.log (arr12.join(""));
}


/* 3- Agora inverta o lado do triângulo. */
console.log ("\n\n****************************************************************\nExercício 3:\n");

let num13 = 5;
let arr13 = [];

/* o código vale não apenas para 5 '*' de base mas para qualquer quantidade */
/* o primeiro 'for' cria o topo para qualquer tamanho de base */
for (let i3a=1; i3a<=num13; i3a++){
  if (i3a!==num13){
    arr13.push (" ");
  }else{
    arr13.push ("*");
    console.log (arr13.join(""));
  }
}
/* imprime o resto do triângulo */
for (let i3b=num13-2; i3b>=0; i3b--){
  arr13[i3b] = "*";
  console.log (arr13.join(""));
}


/* 4- Depois, faça uma pirâmide com n asteriscos de base: */
console.log ("\n\n****************************************************************\nExercício 4:\n");

let num14 = 7;
let arr14 = [];
let top14 = (num14+1)/2

for (let i4a=1; i4a<=num14; i4a++){
  if (i4a!==top14){
    arr14.push (" ");
  }else{
    arr14.push ("*");
  }
}
console.log (arr14.join(""));

for (let i4b=1; i4b<=top14-1; i4b++){
  let ast4 = top14-1;
  arr14[ast4-i4b] = "*";
  arr14[ast4+i4b] = "*";
  console.log (arr14.join(""));
}


/* EXERCÌCIOS BONUS */
console.log ("\n\n****************************************************************\nEXERCÌCIOS BONUS\n****************************************************************");


/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: */
console.log ("\n\nExercício Bônus 1:\n");

let num15 = 7;
let arr15 = [];
let top15 = (num15+1)/2

for (let i5a=1; i5a<=num15; i5a++){
  if (i5a!==top15){
    arr15.push (" ");
  }else{
    arr15.push ("*");
  }
}
console.log (arr15.join(""));

let cont = 0

for (let i5b=1; i5b<=top15-1; i5b++){
  if (i5b!==top15-1){
    let ast5 = top15-1;
    arr15[ast5-i5b] = "*";
    arr15[ast5+i5b] = "*";
    arr15[ast5+cont] = " ";
    arr15[ast5-cont] = " ";
    cont ++
    console.log (arr15.join(""));
  }else{
    for (let i5c=0; i5c<num15; i5c++){
      arr15[i5c] = "*";
    }
    console.log (arr15.join(""));
  }  
}


/* 6- Faça um programa que diz se um número definido numa variável é primo ou não. */
console.log ("\n\n****************************************************************\nExercício Bônus 2:\n");
