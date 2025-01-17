import styles from './Banner.module.css';
// import foto from "../../assets/imagens/"

export default function Banner({ imagem }) {
  return (
<div
  className={styles.capa}
  style={{
    backgroundImage: `url(src/assets/imagens/banner-${imagem}.png)`
  }}
></div>
  ) 
}
