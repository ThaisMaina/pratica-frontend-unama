import React from 'react';

function RadioButtons () {
    return (
    <fieldset>
        <label>Gênero</label>
        <label for="radio-feminino"><input type="radio" name="genero" value="feminino" id="radio-feminino" className="input-radio"/>Feminino</label>
        <label for="radio-masculino"><input type="radio" name="genero" value="masculino" id="radio-masculino" className="input-radio"/>Masculino</label>
        <label for="radio-outro"><input type="radio" name="genero" value="outro" id="radio-outro" className="input-radio"/>Outros</label>
    </fieldset>
    );
}


export default RadioButtons;