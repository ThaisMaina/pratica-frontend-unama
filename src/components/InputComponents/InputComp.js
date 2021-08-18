import React, { useState }from "react";
import Campo from "./Campo";
import RadioButtons from "./RadioButtons";
import Mask from "./InputCpf";
import Validation from "../models/Validation"
import "./InputStyle.css";


function InputComp({ handleInputChange, formValues, }) {


  const [errors, setErrors] = useState({});
  
  console.log(formValues);

  return (    
    <form onSubmit={(event) => {event.preventDefault() 
    setErrors(Validation(formValues)) }} className="Formulario">

      <fieldset className="usuario">
        <label htmlFor="email">Email</label>
        {errors ? <p className="alerta-erro">{errors.email} </p> : null}
        <Campo
          typeInput={"email"}
          placeholder="email@email.com"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={formValues.email}
          error={errors.email}
        />


        <label htmlFor="ConfEmail">Confirme email</label>
        {errors ? <p className="alerta-erro">{errors.confirmEmail} </p> : null}
        <Campo
          typeInput={"email"}
          placeholder="email@email.com"
          name="confirmEmail"
          id="ConfEmail"
          onChange={handleInputChange}
          value={formValues.confirmEmail}
          error={errors.confirmEmail}
        />

        <label htmlFor="Nome">Nome</label>    
        {errors ? <p className="alerta-erro">{errors.nome} </p> : null}   
        <Campo
          typeInput={"text"}
          placeholder="Nome"
          name="nome"
          id="nome"
          onChange={handleInputChange}
          value={formValues.nome}
          error={errors.nome}
        />

        <label htmlFor="Sobrenome">Sobrenome</label>
        {errors ? <p className="alerta-erro">{errors.sobrenome} </p> : null}         
        <Campo
          typeInput={"text"}
          placeholder="Sobrenome"
          name="sobrenome"
          id="Sobrenome"
          onChange={handleInputChange}
          value={formValues.sobrenome}
          error={errors.sobrenome}
        />

        <label htmlFor="CPF">CPF</label>  
        {errors ? <p className="alerta-erro">{errors.cpf} </p> : null}
        <Mask
          mask="999.999.999-99"
          name="cpf"
          id="cpf"
          onChange={handleInputChange}
          value={formValues.cpf}
        />

        <label htmlFor="nascimento">Data de Nascimento</label>  
        {errors ? <p className="alerta-erro">{errors.nascimento} </p> : null}
        <Mask
          mask="99/99/9999"
          placeholder="dd/mm/aaaa"
          name="nascimento"
          id="nascimento"
          onChange={handleInputChange}
          value={formValues.nascimento}

        />
      </fieldset>

      <section className="contato">
        <label htmlFor="telefone">Telefone</label>
        {errors ? <p className="alerta-erro">{errors.fone} </p> : null}
        <div className="spaceFone">
          <select name="Tipo" onChange={handleInputChange}>
            <option value="celular">Celular</option>
            <option value="fixo">Fixo</option>
          </select>
          <Mask
            type="text"
            name="fone"
            id="telefone"
            placeholder="(__) ____-____"
            onChange={handleInputChange}
            value={formValues.fone}
            mask={
              formValues.Tipo === "fixo"
                ? "(99) 9999-9999"
                : "(99) 99999-9999" 
            }
            error={errors.telefone}
          />
        </div>
      </section>

      <fieldset className="input-radio">
        <section className="input-radio-buttons">
          <label>Gênero</label>
          {errors ? <p className="alerta-erro">{errors.genero} </p> : null}
          <RadioButtons
            onChange={handleInputChange}
            value={formValues.genero}
            error={errors.genero}
          />
        </section>
      </fieldset>

      <button type="submit" className="enviar">
        Concluir
      </button>
    </form>
  );
}

export default InputComp;
