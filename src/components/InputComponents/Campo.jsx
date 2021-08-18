import React from 'react';
import './InputStyle.css'


const Campo = ({textLabel, typeInput, ...others}) => {
    return (
        <div>
            <label> {textLabel} </label>
            <input {...others} type={typeInput} className="InputForm"/>
        </div>
    );
}


export default Campo;