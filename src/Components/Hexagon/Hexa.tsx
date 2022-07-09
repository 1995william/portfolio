import useWindowDimensions from "../../utils/useWindowDimensions";
import styles from "./Hexagon.module.scss";
export default function Hexa() {
  const hexa = [];
  const {width} = useWindowDimensions();

  for (let i = 1; i <= width / 50; i++) {
    hexa.push(<div key={i} className={styles.hexagon}></div>);
  }
  return <>{hexa}</>;
}
