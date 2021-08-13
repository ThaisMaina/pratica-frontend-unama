import React from 'react';

function Campo ({textLabel, typeInput}) {
    return (
        <div>
            <label> {textLabel} </label>
            <input type = {typeInput} />

        </div>
    );
}


export default Campo;