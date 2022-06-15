import styles from "./Hexagon.module.css";
export default function Hexa() {
  const hexa = [];
  for (let i = 1; i <= 100; i++) {
    hexa.push(<div key={i} className={styles.hexagon}></div>);
  }
  return <>{hexa}</>;
}