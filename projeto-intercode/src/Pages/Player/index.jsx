import React from "react";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import videos from "../../json/db.json";
import { useParams } from 'react-router-dom';
import styles from "./Player.module.css";

export default function index() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  console.log(video);

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
            width="560"
            height="315"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
        <h2>{video.titulo}</h2>
      </section>

    </>
  );
}
