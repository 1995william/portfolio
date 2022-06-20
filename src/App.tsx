import BemVindo from "./Components/BemVindo/BemVindo";
import Header from "./Components/Header/Header";
import Hexagon from "./Components/Hexagon/Hexagon";
import Icons from "./Components/Particles/Particles";
import Sobre from "./Components/Sobre/Sobre";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <div className={styles.container__app}>
      <Hexagon />
      <Icons/>
      <Header/>
      <main className={styles.main}>
        <BemVindo/>
        <Sobre/>
      </main>
      </div>
    </>
  );
}

export default App;
