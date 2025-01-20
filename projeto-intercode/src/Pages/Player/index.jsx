import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import { useParams } from 'react-router-dom';
import styles from "./Player.module.css";
import NaoEcontrada from "../NaoEncontrada";

export default function index() {
  const [videos, setVideos] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/giovannirp/cinetag-api/Videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(...dados)
    })
  }, [])


  if (!videos) {
    return <NaoEcontrada />
  }

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
            src={videos.link}
            title={videos.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
        <h2>{videos.titulo}</h2>
      </section>

    </>
  );
}
