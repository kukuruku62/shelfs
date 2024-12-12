"use server";

import Link from "next/link";
import pictureHangingShelf from "../../../public/img/shelf-zel-redakt.webp";
import styles from "./styles.module.scss";
import Image from "next/image";

const Selection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.listContainer}>
            <li>
              <Link href="/select/hanging">
                <h2 className={styles.title}>Závesné police</h2>
                <div className={styles.pictureContainer}>
                  <Image
                    alt="Picture of hanging shelf"
                    src={pictureHangingShelf}
                    className={styles.picture}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export { Selection };
