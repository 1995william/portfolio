import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";
import styles from "./Bemvindo.module.scss"
import avatar from "../../assets/imgs/avatar.svg";

export default function BemVindo() {
  return (
    <section className={styles.container__Bemvindo}>
      <article>
        {/* <TypeWriterEffect
          textStyle={{
            fontFamily: "Rajdhani",
            color: "#ffff",
            fontSize: "2em",
          }}
          startDelay={2000}
          cursorColor="#02a88a00"
          text="Olá, me chamo"
          typeSpeed={60}
        />
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Rajdhani",
            color: "#ffff",
            fontSize: "3em",
          }}
          startDelay={3000}
          cursorColor="#02a88a00"
          text="Rodrigo William"
          typeSpeed={60}
        />
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Rajdhani",
            color: "#02A88A",
            fontWeight: 500,
            fontSize: "2em",
          }}
          startDelay={4000}
          cursorColor="#02A88A"
          text="Desenvolvedor Full Stack"
          typeSpeed={50}
        /> */}
      </article>
      <motion.figure
        className={styles.header}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <img src={avatar} alt="Rodrigo" />
      </motion.figure>
    </section>
  );
}
