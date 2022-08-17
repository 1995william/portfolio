import styles from "./Projetos.module.scss";
import Card from "./Card/Card";
import ScrollAnimation from "react-animate-on-scroll";
import { apiProjetos } from "../../service/apiProjetos";
import { useEffect, useState } from "react";
import { IOrdemById, IProjetos } from "../../types/projetos";

export default function Projetos() {
  const [projetos, setProjetos] = useState([])
  useEffect(() => {
    const getProjetos = async () => {
      const response = await apiProjetos();
      setProjetos(response);
    }
    getProjetos();

  }, [])

  return (
    <section className={styles.container__projetos} id="projetos">
      <div className={styles.projeto_titulo}>
        <h1>Projetos</h1>
      </div>
      {projetos.sort((a: IOrdemById, b: IOrdemById) => b.id - a.id).map((projeto: IProjetos, index) => (

        <article key={index} className={styles.card_animation}>
          <ScrollAnimation animateIn="animate__flipInX" delay={0.5 * 1000}>
            <Card
              repositorio={projeto.repository}
              page={projeto.page}
              titulo={projeto.title}
              descricao={projeto.description}
              linguagens={projeto.stacks}
            />
          </ScrollAnimation>
        </article>
      ))}
    </section>
  );
}
