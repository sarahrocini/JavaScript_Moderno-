//7. Atualizando o preço ➵➵➵➵➵➵➵

const produto = {
  nome: "Teclado",
  preco: 150,
  estoque: 20
};

const produtoAtualizado = { ...produto, preco: 180 };
console.log(produtoAtualizado);