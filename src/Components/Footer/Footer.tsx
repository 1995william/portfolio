import styles from "./Footer.module.scss";
import react from "../../assets/imgs/react.svg";

export default function Footer() {
  return (
    <footer className={styles.rodape__container}>
      <p>Licenciado pelo MIT.</p>
      <p>Direitos autorais 2022 Rodrigo William.</p>
      <div className={styles.react}>
        <p>Projeto desenvolvido em React.</p>
        <img src={react} alt="react" />
      </div>
    </footer>
  );
}
