import styles from "./Card.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Icard } from "../../../types/card";

export default function Card({titulo, descricao, linguagens,page,repositorio}:Icard) {
  return (
    <div className={styles.container__cards}>
      <div className={styles.cards}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      
        <div className={styles.container__repositorio}>

          <div className={styles.repositorio}>
           <a href={repositorio} target="_blank"> <FaGithub size={'25px'} /></a>
           <a href={page} target="_blank"><FiExternalLink size={'25px'}/></a>
          </div>

          <div className={styles.linguagens}>

            {linguagens.map((linguagem, index) => ( 
               <img key={index} src={linguagem} alt={"stack"}/>
               ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
