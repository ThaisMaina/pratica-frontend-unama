import React from "react";
import InputComp from "../../components/InputComponents/InputComp";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="Home">
      <fieldset>
        <InputComp />
      </fieldset>
      <fieldset>
        <textarea /> 
      </fieldset>
    </section>
  );
};

export default HomePage;
