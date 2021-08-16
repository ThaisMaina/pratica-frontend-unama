import React from "react";

function RadioGenero({ textLabel, ...others }) {
  return (
    <div className="input-radio">
      <input {...others} type="radio" /> {textLabel}
    </div>

  );
}

export default RadioGenero;
