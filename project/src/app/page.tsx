import { Poster } from "@/components/poster/poster";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Poster />
      <section>
        {/* <article className={styles.article1}></article>
        <span className={styles.span}></span>
        <article className={styles.article2}></article>
        <span className={styles.span}></span>
        <article className={styles.article3}></article> */}
      </section>
    </main>
  );
}
