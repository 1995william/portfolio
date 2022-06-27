import styles from "./Hexagon.module.scss";
export default function Hexa() {
  const hexa = [];
  for (let i = 1; i <= 50; i++) {
    hexa.push(<div key={i} className={styles.hexagon}></div>);
  }
  return <>{hexa}</>;
}
