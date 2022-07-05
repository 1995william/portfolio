import BemVindo from "./Components/BemVindo/BemVindo";
import Contato from "./Components/Contato/Contato";
import Header from "./Components/Header/Header";
import Hexagon from "./Components/Hexagon/Hexagon";
import Icons from "./Components/Particles/Particles";
import Projetos from "./Components/Projetos/Projetos";
import Sobre from "./Components/Sobre/Sobre";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <>
      <div className={styles.app} id="home">
      <Hexagon />
      <Icons/>
      <Header/>
      <main className={styles.main}>
        <BemVindo/>
        <Sobre/>
        <Projetos/>
        <Contato/>
      </main>
      </div>
      </>
  );
}

export default App;
