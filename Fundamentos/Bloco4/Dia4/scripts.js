/* Parte I - Objetos e For/In */
console.log("\n\n****************************************************************\nPARTE I\nObjetos e For/In\n****************************************************************");

/* Usando o objeto abaixo, faça os exercícios a seguir: */

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida */
console.log("\nExercício 1:\n");

console.log("Bem-vinda, " + info.personagem);


/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. */
console.log("\n\n****************************************************************\nExercício 2:\n");

info['recorrente'] = 'Sim';
console.log (info);


/* 3 - Faça um for/in que mostre todas as chaves do objeto. */
console.log("\n\n****************************************************************\nExercício 3:\n");

for (let key in info){
  console.log (key);
}


/* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. */
console.log("\n\n****************************************************************\nExercício 4:\n");

for (let key in info){
  console.log (info[key]);
}


/* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. */
console.log("\n\n****************************************************************\nExercício 5:\n");

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info){
  if (key!=='recorrente'){
    console.log (info[key] +  " e " + info2[key]);
  }else{
    console.log ("Ambos são recorrentes");
  }
}


/* Usando o objeto abaixo, faça os exercícios a seguir: */
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


/* 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */
console.log("\n\n****************************************************************\nExercício 6:\n");

console.log ("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");


/* 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
} */
console.log("\n\n****************************************************************\nExercício 7:\n");

leitor.livrosFavoritos.push ({titulo: 'Harry Potter e o Prisioneiro de Azkaban',
                              autor: 'JK Rowling',
                              editora: 'Rocco',},);

console.log (leitor.livrosFavoritos[1]);


/* 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos". */
console.log("\n\n****************************************************************\nExercício 8:\n");

console.log (leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");


/* Parte II - Funções */
console.log("\n\n****************************************************************\nPARTE II\nFunções\n****************************************************************");


/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */
console.log("\nExercício 9:\n");

