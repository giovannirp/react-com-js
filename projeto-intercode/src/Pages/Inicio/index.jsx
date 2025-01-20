import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import Card from "../../Components/Card";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/giovannirp/cinetag-api/Videos")
    .then((resposta) => resposta.json())
    .then(dados => {
      setVideos(dados);
    })
  }, [])

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seu vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
           return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}
