import { Selection } from "@/components/selection/selection";
import styles from "./styles.module.scss";
import { TitlesBlock } from "@/components/titles-block/titles-block";

export default function Home() {
  return (
    <main className={styles.main}>
      <TitlesBlock />
      <Selection />
    </main>
  );
}