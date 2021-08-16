import React from "react";
import RadioGenero from "./RadioGenero";
import {useState} from "react"

function RadioButtons() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section>
      <label>Gênero</label>
      <label>
        <RadioGenero textLabel="Feminino" name="genero" onChange={handleInputChange}/>
      </label>
      <label>
      <RadioGenero textLabel="Masculino" name="genero" onChange={handleInputChange}/>
      </label>
      <label>
      <RadioGenero textLabel="Outros" name="genero" onChange={handleInputChange}/>
      </label>
    </section>
  );
}

export default RadioButtons;
