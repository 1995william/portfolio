import { motion } from "framer-motion";
import styles from "./Bemvindo.module.scss";
import avatar from "../../assets/imgs/avatar.svg";
import Typewriter from "typewriter-effect";
import Botao from "../Botao/Botao";
import { FiDownload } from "react-icons/fi";
export default function BemVindo() {
  return (
    <section className={styles.container__Bemvindo}>
      <article>
       
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(20).start().typeString("Olá, me chamo");
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .changeDelay(20)
              .start()
              .typeString("Rodrigo William");
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .changeDelay(20)
              .start()
              .typeString("Desenvolvedor Full Stack");
          }}
        />
        <motion.div
         initial={{ opacity:0 }}
         animate={{ opacity: 1 }}
         transition={{
           duration: 1,
           ease: "easeInOut",
           delay: 2,
         }}
        >

        <Botao
        icone={<FiDownload size={'20px'}/>}
        texto="Download CV"
        link={"https://drive.google.com/file/d/11a9XyELLN1D1VB91rq4a7nH7CaM7m5TF/view?usp=sharing"}
        />
        </motion.div>
      </article>
 
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 2,
        }}
        >
        <img src={avatar} alt="Rodrigo" />
      </motion.figure>
    </section>
  );
}
