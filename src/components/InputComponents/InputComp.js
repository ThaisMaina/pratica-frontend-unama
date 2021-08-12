import React from "react";
import Campo from "./Campo";
import "./InputStyle.css";


function InputComp () {
  return (
      <body>
        <form>
            <fieldset id="usuario">
                <Campo textLabel={"Email"} typeInput={"text"} required placeholder="email@email.com"/>
                <Campo textLabel={"Confirme email"} typeInput={"text"} required placeholder="email@email.com"/>
                <Campo textLabel={"Nome"} typeInput={"text"}/>
                <Campo textLabel={"Sobrenome"} typeInput={"text"}/>
                <Campo textLabel={"CPF"} typeInput={"text"} id="cpf" required placeholder="000.000.000-00"/>
                <Campo textLabel={"Data de Nascimento"} typeInput={"text"} id="nascimento" required placeholder="000.000.000-00"/>
 
            </fieldset>
            
            <fieldset id="contato">
                <legend>Telefone</legend>
                <Campo textLabel={"Nome"} typeInput={"text"}/>
                <select>
                    <option>Celular</option>
                    <option>Fixo</option>
                </select>
            </fieldset>

            <fieldset id="genero">
                <legend>Gênero</legend>
                <label for="radio-feminino"><input type="radio" name="genero" value="feminino" id="radio-feminino" className="input-radio"/>Feminino</label>
                

                <label for="radio-masculino"><input type="radio" name="genero" value="masculino" id="radio-masculino" className="input-radio"/>Masculino</label>
                

                <label for="radio-outro"><input type="radio" name="genero" value="outro" id="radio-outro" className="input-radio"/>Outro</label>
                
            </fieldset>

            <input type="submit" value="Concluir" className="enviar" />

        </form>
      </body>
   )
}

export default InputComp;
