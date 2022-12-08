import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import {setFavInStorage,isFavorited,removeFavInStorage} from "./utils/localStorage.service";
import { ContextGlobal } from "./utils/global.context";
import { useContext, useState } from "react";


const Card = ({ name, username, id }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(id));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = () => {
    const favorite = setFavInStorage({ name, username, id });
    isFavorite(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavInStorage(id);
    isFavorite(favorite);
  };

 return (
  <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="imagen doctor"
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentist/${id}`}>
          <h5 className={`card-title ${styles.title}`}>{name}</h5>
        </Link>
        <p className="card-text">{username}</p>
        <button
          onClick={favorite ? removeFav : addFav}
          className={`btn btn-${isDarkMode ? "dark" : "light"} ${
            styles.favButton
          }`}
        >
          {favorite ? "Eliminar de favoritos" : "⭐ Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
};

export default Card;
