import { FiSend } from "react-icons/fi";
import styles from "./Contato.module.scss";
import email from "../../assets/imgs/email.png";
import ScrollAnimation from "react-animate-on-scroll";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../utils/validation";

export default function Contato() {

  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(validationSchema),
  });
   function onSubmit() {
    console.log('envio')
  }
  return (
    <section className={styles.container__contato}>
      <div className={styles.contato_titulo}>
        <h1>Contato</h1>
      </div>
    
      <article className={styles.descricao}>
        <ScrollAnimation animateIn="animate__fadeInLeft" delay={0.2 * 1000}>
          <p>
            Conecte-se comigo. Se você quiser saber mais sobre mim ou se quiser
            apenas gostaria de dizer olá, envie-me uma mensagem. Eu adoraria
            ouvir de você.
          </p>
        </ScrollAnimation>
      </article>

      <div className={styles.container__formulario}>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          delay={0.6 * 1000}
        >

        <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario}>
        
          <label>
            Nome
            <input
              type="text"
              id="nome"
              {...register("nome")}
              placeholder="Nome completo"
              className={`${errors.nome != undefined ? styles.campoInvalido:''}` }
            />
            <span className={`${errors.nome != undefined ? styles.mensagemInvalida:''}` }>{errors.nome?.message ? errors.nome?.message?.toString(): ''}</span>
          </label>
      
          <label>
            E-mail
            <input
              type="email"
              id="email"
              placeholder="Digite seu melhor e-mail"
              {...register("email")}
              className={`${errors.email != undefined ? styles.campoInvalido:''}` }
            />
            <span className={`${errors.email != undefined ? styles.mensagemInvalida:''}` }>{errors.email?.message ? errors.email?.message?.toString(): ''}</span>
          </label>

          <label>
            Mensagem
            <textarea
              id="mensagem"
              placeholder="Escreva sua mensagem aqui"
              rows={10}
              cols={20}
              {...register('mensagem')}
              className={`${errors.mensagem != undefined ? styles.campoInvalido:''}` }
            ></textarea>
            <span className={`${errors.mensagem != undefined ? styles.mensagemInvalida:''}`}>{errors.mensagem?.message ? errors.mensagem?.message?.toString() : ''}</span>
          </label>

          <div className={styles.container__botao}>
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              delay={0.6 * 1000}
            >
            <button>
              <FiSend />
              Enviar mensagem
            </button>
            </ScrollAnimation>
          </div>
        </form>
        </ScrollAnimation>
      </div>

      <figure className={styles.container__emailLogo}>
        <ScrollAnimation animateIn="animate__fadeInRight" delay={0.6 * 1000}>
          <img src={email} alt="email" />
        </ScrollAnimation>
      </figure>
    </section>
  );
}
