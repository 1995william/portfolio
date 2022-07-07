import styles from "./Projetos.module.scss";
import html from "../../assets/imgs/html.svg";
import css from "../../assets/imgs/css.svg";
import js from "../../assets/imgs/js.svg";
import ts from "../../assets/imgs/ts.svg";
import node from "../../assets/imgs/node.svg";
import react from "../../assets/imgs/react.svg";
import mysql from "../../assets/imgs/mysql.svg";
import angular from "../../assets/imgs/angular.svg";
import jquery from "../../assets/imgs/jquery.svg";
import Card from "./Card/Card";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projetos() {
  return (
    <section className={styles.container__projetos} id="projetos">
      <div className={styles.projeto_titulo}>
        <h1>Projetos</h1>
      </div>

      <article className={styles.card_animation}>
        <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>
          <Card
            repositorio={"https://github.com/1995william/GitHub-Api"}
            page={"http://git-hub-api-kappa.vercel.app/"}
            titulo={"GitHub Api"}
            descricao={
              "O projeto FieldControl Challenge Front tem como objetivo o desenvolvimento de uma aplicação em Angular 14.0.2 que utilize endpoint da API do github."
            }
            linguagens={[
              {
                caminho: angular,
                nome: "angular",
              },
              {
                caminho: css,
                nome: "css",
              },
              {
                caminho: ts,
                nome: "TypeScript",
              },
              {
                caminho: node,
                nome: "node",
              },
            ]}
          />
        </ScrollAnimation>
      </article>

      <article className={styles.card_animation}>
        <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>
          <Card
          repositorio={"https://github.com/1995william/Projeto-Linx-Impulse"}
          page={"http://projeto-linx-impulse.vercel.app/"}
            titulo={"Linx Impulse"}
            descricao={
              "O desafio consiste no desenvolvimento do layout de uma landing page com uma grade de produtos e um formulário de newsletter utilizando o React.js"
            }
            linguagens={[
              {
                caminho: react,
                nome: "react",
              },
              {
                caminho: css,
                nome: "css",
              },
              {
                caminho: js,
                nome: "JavaScript",
              },
              {
                caminho: node,
                nome: "node",
              },
            ]}
          />
        </ScrollAnimation>
      </article>

      <article className={styles.card_animation}>
        <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>
          <Card
          repositorio={"https://github.com/1995william/Projeto-APOD-Resilia"}
          page={"https://1995william.github.io/Projeto-APOD-Resilia/"}
            titulo={"Astronomy Picture of the Day"}
            descricao={
              "O projeto consiste na requisição da API 'Astronomy Picture of the Day', disponibilizada pela NASA."
            }
            linguagens={[
              {
                caminho: html,
                nome: "html",
              },
              {
                caminho: css,
                nome: "css",
              },
              {
                caminho: js,
                nome: "JavaScript",
              },
              {
                caminho: jquery,
                nome: "jquery",
              },
            ]}
          />
        </ScrollAnimation>
      </article>
      <article className={styles.card_animation}>
        <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>
          <Card
          repositorio={"https://github.com/1995william/picpro"}
          page={"https://1995william.github.io/picpro/"}
            titulo={"PicPro"}
            descricao={
              "Projeto desenvolvido para o evento PicPro ministrado pelos instrutores da Kenzie Academy Brasil em parceria com o PicPay."
            }
            linguagens={[
              {
                caminho: html,
                nome: "html",
              },
              {
                caminho: css,
                nome: "css",
              },
              {
                caminho: js,
                nome: "JavaScript",
              },
            ]}
          />
        </ScrollAnimation>
      </article>
      <article className={styles.card_animation}>
        <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>
          <Card
           repositorio={"https://github.com/1995william/Calculadora"}
           page={"https://1995william.github.io/Calculadora/"}
            titulo={"Calculadora"}
            descricao={"Calculadora simples que realiza operações aritméticas."}
            linguagens={[
              {
                caminho: html,
                nome: "html",
              },
              {
                caminho: css,
                nome: "css",
              },
              {
                caminho: js,
                nome: "JavaScript",
              },
            ]}
          />
        </ScrollAnimation>
      </article>

    </section>
  );
}
