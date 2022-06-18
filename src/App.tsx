import BemVindo from "./Components/BemVindo/BemVindo";
import Header from "./Components/Header/Header";
import Hexagon from "./Components/Hexagon/Hexagon";
import Icons from "./Components/Particles/Particles";
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
      </main>
      </div>
    </>
  );
}

export default App;
