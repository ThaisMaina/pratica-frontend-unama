import React, { useState } from "react";
import InputComp from "../../components/InputComponents/InputComp";
import "./HomePage.css";

const HomePage = () => {
  const [formValues, setFormValues] = useState({
    email:"",
    confirmEmail:"",
    nome:"",
    sobrenome:"",
    cpf:"",
    nascimento:"",
    fone:"",
    genero:""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };




  return (
    <section className="Home">
      <div className="teste1">
        <InputComp handleInputChange={handleInput} formValues={formValues} />
      </div>
      <div className="teste2">
        <h1>
          <p>Email: {formValues.email === formValues.confirmEmail && formValues.email}</p>
          <p>Nome: {formValues.nome !=="" && formValues.sobrenome !=="" ? formValues.nome + " " + formValues.sobrenome : null} </p>
          <p>CPF:{formValues.cpf}</p>
          <p>Data de Nascimento: {formValues.nascimento}</p>
          <p>Telefone: {formValues.fone}</p>
          <p>Gênero: {formValues.genero}</p>
        </h1>
      </div>
    </section>
  );
};

export default HomePage;
