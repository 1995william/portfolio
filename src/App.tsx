import BemVindo from "./Components/BemVindo/BemVindo";
import Contato from "./Components/Contato/Contato";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hexagon from "./Components/Hexagon/Hexagon";
import Icons from "./Components/Particles/Particles";
import Projetos from "./Components/Projetos/Projetos";
import Sobre from "./Components/Sobre/Sobre";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <>
      <Hexagon />
      <div className={styles.app} id="home">
        <Icons />
        <Header />

        <main className={styles.main}>
          <BemVindo />
          <Sobre />
          <Projetos />
          <Contato />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
