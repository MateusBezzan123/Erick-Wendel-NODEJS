/*
0 - Obter um usuario
1 - Obter o numero de telefone de um usuário a partir de seu Id
2 - Obter o endereço de usuario pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "119002",
      ddd: 11,
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  console.log("usuario", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  if (error) {
    console.error("DEU RUIM EM USUARIO", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error, telefone) {
    if (error) {
      console.error("DEU RUIM EM TELEFONE", error);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error, endereco) {
      if (error) {
        console.error("DEU RUIM EM ENDERECO", error);
        return;
      }
      console.log(
        `Nome:${usuario.nome},Endereco:${endereco.rua},${endereco.numero},Telefone:(${telefone.ddd})${telefone.telefone}`
      );
    });
  });
});
