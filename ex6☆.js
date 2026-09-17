//6. Adicionando uma propriedade ─── ∙ ∙ ∙ ✤ ∙ ∙ ∙ ───

const produto = {
    nome: "Mouse",
    preco: 80
};

const produtoCompleto = {...produto, estoque: 15};

console.log(produtoCompleto);

console.log(produto)