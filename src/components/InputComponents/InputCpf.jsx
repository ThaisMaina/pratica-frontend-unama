import React from "react";
import InputMask from "react-input-mask";

function InputCpf({ text, mask, ...others }) {
  return (
    <div className="input-cpf">
      <label>{text}</label>
      <InputMask type="text" mask={mask} {...others} /> 
    </div>

  );
}

export default InputCpf;
