//20. ⭐ Desafio — Usuário seguro de uma API ─── ⋆⋅𖤓⋅⋆ ───

const usuario = {
  id: 10,
  nome: "Carlos",
  email: "carlos@email.com",
  senha: "123456",
  ativo: true
};

const { senha, ...dadosSeguros } = usuario;

const usuarioFinal = {
  ...dadosSeguros,
  status: dadosSeguros.ativo ? "Ativo" : "Inativo"
};

console.log(usuarioFinal);