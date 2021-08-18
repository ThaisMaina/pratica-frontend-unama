function Validation(valor) {
  const errors = {};

  if (!valor.email) {
    errors.email = "Campo obrigatório";
  }

  if (!valor.confirmEmail) {
    errors.confirmEmail = "Campo obrigatório";
  }

  if (!valor.nome) {
    errors.nome = "Campo obrigatório";
  }

  if (!valor.sobrenome) {
    errors.sobrenome = "Campo obrigatório";
  }

   if (!valor.cpf) {
   errors.cpf = "Campo obrigatório";
  }

  if (!valor.nascimento) {
    errors.nascimento = "Campo obrigatório";
   }

 
  if (!valor.fone) {
    errors.fone = "Campo obrigatório";
  }

  if (!valor.genero) {
    errors.genero = "Campo obrigatório";
  }

let userDate = valor.nascimento;


  return errors;
}

export default Validation;
