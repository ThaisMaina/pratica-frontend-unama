import React from "react";
import Campo from "./Campo";
import RadioButtons from "./RadioButtons";
import "./InputStyle.css";



function InputComp () {
  return (
      <body>
        <form>
            <fieldset className="usuario">
                <Campo textLabel={"Email"} typeInput={"text"} required placeholder="email@email.com"/>
                <Campo textLabel={"Confirme email"} typeInput={"text"} required placeholder="email@email.com"/>
                <Campo textLabel={"Nome"} typeInput={"text"}/>
                <Campo textLabel={"Sobrenome"} typeInput={"text"}/>
                <Campo textLabel={"CPF"} typeInput={"text"} id="cpf" required placeholder="000.000.000-00"/>
                <Campo textLabel={"Data de Nascimento"} typeInput={"text"} id="nascimento" required placeholder="000.000.000-00"/>
            </fieldset>
            
            <fieldset className="contato">
                <Campo textLabel={"Telefone"}/>
                <select className="op-telefone">
                    <option>Celular</option>
                    <option>Fixo</option>
                </select>
            </fieldset>

            <fieldset>
                <RadioButtons/>
            </fieldset>




        <button type="submit" className="enviar">Concluir</button>

        </form>
      </body>
   )
}

export default InputComp;
