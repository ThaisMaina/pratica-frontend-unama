import React from 'react';
import "./InputStyle.css";
import moment from "moment";


const dataDeNascimento = () => { 

    const dataDeNascimento = moment("DD/MM/YYYY", "pt", true);
    dataDeNascimento.add(5, "years");
    
    

  console.log(dataDeNascimento.isValid);

  return (
   moment().format('DD/MM/YYYY')
  );
}

export default dataDeNascimento;
