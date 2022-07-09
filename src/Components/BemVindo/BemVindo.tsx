import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Bemvindo.module.scss";
import avatar from "../../assets/imgs/avatar.svg";
import Typewriter from "typewriter-effect";
import Botao from "../Botao/Botao";
import { FiDownload } from "react-icons/fi";
import mouse from "../../assets/imgs/mouse.svg"
export default function BemVindo() {
  return (
    <section className={styles.container__Bemvindo}>
      <article>
        {/* <img src={mouse} alt="" /> */}
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
        link={"https://drive.google.com/file/d/17MsqyyD2-ql4sFHQhliov3RASQfkUSPs/view?usp=sharing"}
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
