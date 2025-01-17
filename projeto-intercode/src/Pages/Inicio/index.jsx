import Rodape from "../../Components/Rodape";
import Cabecalho from "../../Components/Cabecalho";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seu vídeos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  )
}
