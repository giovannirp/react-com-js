import { Link } from "react-router-dom";
import Logo from "../../assets/imagens/logo.png";
import styles from './Cabecalho.module.css';
import CabecalhoLink from "../CabecalhoLink";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={Logo} alt="Logo do Cinetag"/>
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url="./Favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}
