import Hexa from "./Hexa";
import styles from "./Hexagon.module.css";
export default function Hexagon() {
  const rows = [];
  for (let i = 1; i <= 40; i++) {
    rows.push(
      <div key={i} className={styles.row}>
        <Hexa />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.curser}></div>
      {rows}
    </div>
  );
}
