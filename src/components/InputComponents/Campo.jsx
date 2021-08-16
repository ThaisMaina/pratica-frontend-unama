import React from 'react';

function Campo ({textLabel, typeInput, ...others}) {
    return (
        <div>
            <label> {textLabel} </label><input {...others} type = {typeInput} />
        </div>
    );
}


export default Campo;