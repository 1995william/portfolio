import styles from "./Projetos.module.css";
import html from "../../assets/imgs/html.svg";
import css from "../../assets/imgs/css.svg";
import js from "../../assets/imgs/js.svg";
import ts from "../../assets/imgs/ts.svg";
import node from "../../assets/imgs/node.svg";
import react from "../../assets/imgs/react.svg";
import mysql from "../../assets/imgs/mysql.svg";
import Card from "./Card/Card";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projetos() {
  return (
    <section className={styles.container__projetos}>
      <div className={styles.projeto_titulo}>
        <h1>Projetos</h1>
      </div>

    <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>

      <Card
      titulo={"Where does it come from?"}
      descricao ={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      linguagens={[{
          caminho: html,
          nome: "html"
        },
        {
          caminho: css,
          nome: "css"
        },
        {
          caminho: js,
          nome: "JavaScript"
        },
        {
          caminho: node,
          nome: "node"
        }
      ]}
      />
    </ScrollAnimation>
  
    </section>
  );
}
