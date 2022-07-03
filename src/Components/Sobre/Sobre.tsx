import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import styles from "./Sobre.module.scss";
import rodrigoImg from "../../assets/imgs/rodrigo.png";
import html from "../../assets/imgs/html.svg";
import css from "../../assets/imgs/css.svg";
import js from "../../assets/imgs/js.svg";
import ts from "../../assets/imgs/ts.svg";
import node from "../../assets/imgs/node.svg";
import react from "../../assets/imgs/react.svg";
import mysql from "../../assets/imgs/mysql.svg";
import sass from "../../assets/imgs/sass.svg";

export default function Sobre() {
  return (
    <section className={styles.container__sobre} id="sobre">
      <div className={styles.sobre_titulo}>
        <h1>Sobre</h1>
      </div>

      <article>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={0.4 * 1000}>
          <p>
            Técnico em eletrotécnico em transição de carreira, com uma grande
            paixão por programação. Gosto de aprender coisas novas e ao mesmo
            tempo me desafiam. Aprimorei minhas habilidades como desenvolvedor
            Front-End e Back-End.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={0.6 * 1000}>
          <p>
            Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript.
            Tenho familiaridade em desenvolver layouts que me fornecem. Estou
            sempre aprimorando minhas habilidades a cada projeto que colocam em
            minhas mãos.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={0.8 * 1000}>
          <p>
            Sou uma pessoa dedicada que corre atrás para realizar seus sonhos,
            trabalhador e orientado a resultados, sempre busco alcançar minha
            melhor versão.
          </p>
        </ScrollAnimation>
        <div className={styles.stacksTitulo}>
          <ScrollAnimation animateIn="animate__fadeInLeft" delay={1 * 1000}>
            <p>Minhas principais stacks</p>
          </ScrollAnimation>
        </div>
        <figure className={styles.container__stacks}>
          <ScrollAnimation animateIn="animate__bounceInLeft" delay={1.2 * 1000}>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={sass} alt="sass" />
            <img src={js} alt="js" />
            <img src={ts} alt="ts" />
            <img src={node} alt="node" />
            <img src={react} alt="react" />
            <img src={mysql} alt="mysql" />
          </ScrollAnimation>
        </figure>
      </article>
      <figure className={styles.container__imgRodrigo}>
        <ScrollAnimation animateIn="animate__fadeInRight" delay={1.6 * 1000}>
          <img src={rodrigoImg} alt="rodrigo" />
        </ScrollAnimation>
      </figure>
    </section>
  );
}
