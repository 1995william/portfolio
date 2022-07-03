import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import MenuButton from "./MenuHamburguer/MenuHamburguer";
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [bgHeader, setBgHeader] = useState(false);

  const listenScrollEvent = () => {
   
   window.scrollY > 100 ? setBgHeader(true): setBgHeader(false);

  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
  }, []);

  const handlerClick = () => {
    setOpen(false);
  };
  return (
    <>
      <motion.header
        className={`${bgHeader ? `${styles.bgAtivo} ${styles.header}`: `${styles.bgDesativo} ${styles.header}`}`}
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <nav className={styles.navegacao}>
          <ul
            className={`${
              isOpen ? styles.openNavegacao : styles.closeNavegacao
            }`}
          >
            <li>
              <a onClick={handlerClick} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={handlerClick} href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={handlerClick} href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a onClick={handlerClick} href="#contato">
                Contato
              </a>
            </li>
          </ul>
          <MenuButton
            className={styles.burguer}
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
          />
        </nav>
      </motion.header>
    </>
  );
}
