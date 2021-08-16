import React from "react";
import Campo from "./Campo";
import RadioButtons from "./RadioButtons";
import "./InputStyle.css";
import InputCpf from "./InputCpf";
import { useState } from "react";

function InputComp() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  console.log(formValues);

  return (
    <body>
      <form onSubmit={(event) => event.preventDefault()}>
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
            typeInput={"text"}
            required
            placeholder="email@email.com"
            name="Confirme email"
            onChange={handleInputChange}
            value={formValues.confirmeemail}
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
            name="Sobrenome"
            onChange={handleInputChange}
            value={formValues.lname}
          />

          <InputCpf
            mask="999.999.999-99"
            text="CPF"
            name="CPF"
            onChange={handleInputChange}
            value={formValues.cpf}
          />

          <Campo
            textLabel={"Data de Nascimento"}
            typeInput={"date"}
            name="Data de Nascimento"
            onChange={handleInputChange}
            value={formValues.nascimento}
          />
        </fieldset>

        <section className="contato">
          <div>
            <select
              name="phone"
              onChange={handleInputChange}
              value={formValues.phone || ""}
            >
              <option value="celular">Celular</option>
              <option value="fixo">Fixo</option>
            </select>
          </div>
          <Campo
            textLabel={"Telefone"}
            name="Telefone"
            onChange={handleInputChange}
          />
        </section>

        <fieldset className="input-radio-data">
          <div>
            <RadioButtons/>
          </div>
        </fieldset>

        <button type="submit" className="enviar">
          Concluir
        </button>
      </form>
    </body>
  );
}

export default InputComp;
