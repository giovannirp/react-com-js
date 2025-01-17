import React from 'react'
import Banner from '../../Components/Banner'
import Titulo from '../../Components/Titulo'
import styles from "./Favoritos.module.css";
import Card from '../../Components/Card';

export default function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id="1" titulo="Gato bonifácio" capa="https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-scaled.jpg" />
      </section>
    </>
  )
}
