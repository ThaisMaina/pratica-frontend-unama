import "./InputStyle.css";
import moment from "moment";


const dataDeNascimento = () => { 

    const dataDeNascimento = moment("DD/MM/YYYY", true);
    dataDeNascimento.add(5, "years");
    

  return (
   moment().format('DD/MM/YYYY')
  );
}

export default dataDeNascimento;
