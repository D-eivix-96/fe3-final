import React from 'react';
import { useEffect, useState, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { useParams } from "react-router-dom";
import styles from "./DetailDentist.module.css";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const DetailDentist = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    async function fetchData() {
      fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setDentist(...data);
        });
    }
    fetchData();
  }, [id]);
  return (
    <>
      {dentist ? (
      <ul className={`list-group ${isDarkMode ? styles.cardDark : ""}`}>
          <li className="list-group-item">Nombre: {dentist.name}</li>
          <li className="list-group-item">
              Usuario: {dentist.username}
          </li>
          <li className="list-group-item">
              Correo electrónico: {dentist.email}
          </li>
          <li className="list-group-item">
              Teléfono: {dentist.phone}
          </li>
          <li className="list-group-item">
              Sitio Web:  {dentist.website}
          </li>
      </ul> 
      ) : null}
     
    </>
  );
};

export default DetailDentist;