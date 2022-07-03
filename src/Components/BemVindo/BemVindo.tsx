import { motion } from "framer-motion";
import styles from "./Bemvindo.module.scss";
import avatar from "../../assets/imgs/avatar.svg";
import Typewriter from "typewriter-effect";

export default function BemVindo() {
  return (
    <section className={styles.container__Bemvindo}>
      <article>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(70).start().typeString("Olá, me chamo");
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              .changeDelay(70)
              .start()
              .typeString("Rodrigo William");
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3500)
              .changeDelay(70)
              .start()
              .typeString("Desenvolvedor Full Stack");
          }}
        />
      </article>
      <motion.figure
        className={styles.header}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 5,
        }}
      >
        <img src={avatar} alt="Rodrigo" />
      </motion.figure>
    </section>
  );
}
