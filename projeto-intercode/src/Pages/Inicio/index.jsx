import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import Card from "../../Components/Card";
import videos from "../../json/db.json";
import styles from "./Inicio.module.css";

export default function Inicio() {
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
