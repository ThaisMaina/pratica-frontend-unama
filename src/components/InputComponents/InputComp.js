import React, { Component } from "react";
import InputStyle from '../../components/InputComponents/InputStyle.css';


class InputComp extends Component {
  render() {
    return (
      <body>
        <form>
            <fieldset id="usuario">
                <label>Email</label>
                <input type="email" required placeholder="email@email.com" />

                <label>Confirme o Email</label>
                <input type="email" required placeholder="email@email.com" />

                <label>Nome</label>
                <input type="text" />

                <label>Sobrenome</label>
                <input type="text" />  

                <label>CPF</label>
                <input type="number" id="cpf" required placeholder="000.000.000-00" /> 

                <label>Data de Nascimento</label>
                <input type="number" id="nascimento" placeholder="00/00/0000" /> 
            </fieldset>
            
            <fieldset id="contato">
                <legend>Telefone</legend>
                <select>
                    <option>Celular</option>
                    <option>Fixo</option>
                </select>
            </fieldset>

            <fieldset id="genero">
                <legend>Gênero</legend>
                <label> Radio Button <input type="radio" name="contato" /></label>

                <label>Radio Button<input type="radio" name="contato" /></label>

                <label>Radio Button<input type="radio" name="contato" /></label>
            </fieldset>

            <input type="submit" value="Concluir" className="enviar" />

        </form>
      </body>
    );
  }
}

export default InputComp;
