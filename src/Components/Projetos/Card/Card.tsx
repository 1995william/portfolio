import styles from "./Card.module.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Icard } from "../../../types/card";


export default function Card({titulo, descricao, linguagens}:Icard) {
  return (
    <div className={styles.container__cards}>
      <div className={styles.cards}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>

        <div className={styles.container__repositorio}>

          <div className={styles.repositorio}>
            <FaGithub size={'25px'} />
            <FiExternalLink size={'25px'}/>
          </div>

          <div className={styles.linguagens}>

            {linguagens.map((linguagem, index) => ( 
               <img key={index} src={linguagem.caminho} alt={linguagem.nome}/>
               ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
