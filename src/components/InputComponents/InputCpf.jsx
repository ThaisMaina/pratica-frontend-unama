import React from "react";
import InputMask from "react-input-mask";
import './InputStyle.css'

function Mask({ text, mask, ...others }) {
  return (
    <div className="input-cpf">
      <label>{text}</label>
      <InputMask type="text" mask={mask} {...others} className="InputForm"/> 
    </div>

  );
}

export default Mask;
