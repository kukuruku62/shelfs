import { Selection } from "@/components/selection/selection";
import { TitlesBlock } from "@/components/titles-block/titles-block";
import styles from "./styles.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
      <TitlesBlock title="Кухонные полки из дерева" subtitleFirst="Изготовлено в России" subtitleSecond="Ручная работа" />
      <Selection />
    </main>
  );
}
