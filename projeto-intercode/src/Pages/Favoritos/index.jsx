import React from "react";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import styles from "./Favoritos.module.css";
import Card from "../../Components/Card";
import { useFavoritoContext } from "../../Contextos/Favoritos";

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
      </section>
    </>
  );
}
