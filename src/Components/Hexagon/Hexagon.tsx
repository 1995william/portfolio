import useWindowDimensions from "../../utils/useWindowDimensions";
import Hexa from "./Hexa";
import styles from "./Hexagon.module.scss";
export default function Hexagon() {
  const rows = [];
  const { height} = useWindowDimensions();
  
  for (let i = 1; i <= height / 37; i++) {
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
