import styles from './Botao.module.scss';
import { Ibotao } from '../../types/botao';

export default function Botao ({onClick,icone,texto,link}:Ibotao) {

    return (
        <div className={styles.container__botao}>
            <a href={link} target='_blank'>
            <button onClick={onClick}>
              <>
              {icone}
              {texto}
              </>
            </button>
            </a>
          </div>
    )
}