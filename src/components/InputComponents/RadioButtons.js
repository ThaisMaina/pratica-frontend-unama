import React from "react";
import './InputStyle.css'

function RadioButtons({ textLabel, radio, ...others }) {
  return (
    <div className="genero-button">
      <input {...others} type="radio" name="genero" value="Feminino" id="feminino" className="radio-gender" />
      <label htmlFor="feminino">{textLabel} Feminino</label>
      <input {...others} type="radio" name="genero" value="Masculino" id="masculino" className="radio-gender" />
      <label htmlFor="masculino">{textLabel} Masculino</label>
      <input {...others} type="radio" name="genero" value="Outros" id="outro" className="radio-gender" />
      <label htmlFor="outro">{textLabel} Outros</label>
    </div>
  );
}

export default RadioButtons;
