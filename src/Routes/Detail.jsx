import React from 'react';
import DetailDentist from '../Components/DetailDentist';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <DetailDentist/>
  )
}

export default Detail