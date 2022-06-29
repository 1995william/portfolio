import { FiSend } from "react-icons/fi";
import styles from "./Contato.module.scss";
import email from "../../assets/imgs/email.png"
export default function Contato() {
  return (
    <section className={styles.container__contato}>
      <div className={styles.contato_titulo}>
        <h1>Contato</h1>
      </div>
      <p>
        Conecte-se comigo. Se você quiser saber mais sobre mim ou se quiser
        apenas gostaria de dizer olá, envie-me uma mensagem. Eu adoraria ouvir
        de você.
      </p>
      <form
        action="#"
        onSubmit={(e) => e.preventDefault}
        className={styles.formulario}
      >
        <label htmlFor="nome">
          Seu nome
          <input type="text" name="nome" placeholder="Rodrigo William" />
        </label>
        <label htmlFor="email">
          Seu email
          <input type="email" name="email" placeholder="teste123@gmail.com" />
        </label>
        <label htmlFor="mensagem">
          Mensagem
          <textarea
            placeholder="Escreva sua mensagem aqui"
            rows={10}
            cols={20}
          ></textarea>
        </label>

        <div className={styles.container__botao}>
          <button>
            <FiSend />
            Enviar mensagem
          </button>
        </div>
      </form>
      <figure className={styles.container__emailLogo}>
        <img src={email} alt="email" />
      </figure>
    </section>
  );
}
