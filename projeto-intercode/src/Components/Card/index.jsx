import styles from "./Card.module.css";
import iconeFavoritar from './favoritar.png';
import iconeDesvaloritar from './desfavoritar.png';

import { useFavoritoContext } from "../../Contextos/Favoritos";
import { Link } from "react-router-dom";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icon = !ehFavorito ? iconeFavoritar : iconeDesvaloritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img 
        src={icon} 
        alt="Favoritar Filme" 
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({id, titulo, capa })
        }}
    />
    </div>
  );
}
