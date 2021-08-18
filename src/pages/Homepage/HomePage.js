import React, { useState } from "react";
import InputComp from "../../components/InputComponents/InputComp";
import "./HomePage.css";

const HomePage = () => {
  const [formValues, setFormValues] = useState({});

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
          <p>Email: {formValues.email}</p>
          <p>Confirme Email: {formValues.confirmEmail}</p>
          <p>Nome: {formValues.nome} </p>
          <p>Sobrenome: {formValues.nome} {formValues.sobrenome}</p>
          <p>CPF:{formValues.CPF}</p>
          <p>Data de Nascimento: {formValues.dataDeNascimento}</p>
          <p>Telefone: {formValues.Fone}</p>
          <p>Gênero: {formValues.genero}</p>
        </h1>
      </div>
    </section>
  );
};

export default HomePage;
