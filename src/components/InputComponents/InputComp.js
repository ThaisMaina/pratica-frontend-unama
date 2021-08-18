import React from "react";
import Campo from "./Campo";
import RadioButtons from "./RadioButtons";
import "./InputStyle.css";
import Mask from "./InputCpf";

function InputComp({ handleInputChange, formValues }) {
  console.log(formValues);

  return (
    <form onSubmit={(event) => event.preventDefault()} className="Formulario">
      <fieldset className="usuario">
        <Campo
          textLabel={"Email"}
          typeInput={"email"}
          required
          placeholder="email@email.com"
          name="email"
          onChange={handleInputChange}
          value={formValues.email}
        />
        <Campo
          textLabel={"Confirme email"}
          typeInput={"email"}
          required
          placeholder="email@email.com"
          name="confirmEmail"
          onChange={handleInputChange}
          value={formValues.confemail}
        />
        <Campo
          textLabel={"Nome"}
          typeInput={"text"}
          name="nome"
          onChange={handleInputChange}
          value={formValues.name}
        />
        <Campo
          textLabel={"Sobrenome"}
          typeInput={"text"}
          name="sobrenome"
          onChange={handleInputChange}
          value={formValues.lname}
        />

        <Mask
          mask="999.999.999-99"
          text="CPF"
          name="CPF"
          onChange={handleInputChange}
          value={formValues.cpf}
        />
        <Mask
          mask="99/99/9999"
          textLabel={"Data de Nascimento"}
          placeholder="DD/MM/AAAA"
          name="dataDeNascimento"
          onChange={handleInputChange}
          value={formValues.nascimento}
        />
      </fieldset>

      <section className="contato">
        <label>Telefone</label>
        <div className="spaceFone">
          <select name="Tipo" onChange={handleInputChange}>
            <option value="celular">Celular</option>
            <option value="fixo">Fixo</option>
          </select>
          <Mask
            type="text"
            name="Fone"
            onChange={handleInputChange}
            value={formValues.Fone}
            mask={
              formValues.Tipo === "fixo"
                ? "(99) 9999-9999"
                : "(99) 99999-9999" 
            }
          />
        </div>
      </section>

      <fieldset className="input-radio">
        <section className="input-radio-buttons">
          <label>Gênero</label>
          <RadioButtons
            onChange={handleInputChange}
            value={formValues.genero}
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
