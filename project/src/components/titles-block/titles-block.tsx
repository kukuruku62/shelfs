"use server";

import Image from "next/image";
import pictureRedact from "../../../public/img/shelf-zel-redakt.webp";
import pictureTable from "../../../public/img/svg/tablichka-pod-polku.svg";

// import pictureTools from "../../../public/img/svg/tools.svg";

// ВКЛЮЧИТЬ ПОДВЕС

// import picturePodves from "../../../public/img/svg/podves.svg";

import styles from "./styles.module.scss";
import Link from "next/link";

export async function TitlesBlock() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <Image src={pictureTools} className={styles.toolsImg} alt="" /> */}
          {/* <Image src={picturePodves} className={styles.podvesImg} alt="" /> */}

          <div className={styles.leftPart}>
            <h1 className={styles.title}>Drevené police do kuchyne</h1>
            {/* hgroup add */}
            <div className={styles.subtitlesBlock}>
              <p className={styles.subtitleTop}>
                <span>V</span>
                <span>y</span>
                <span>r</span>
                <span>o</span>
                <span>b</span>
                <span>e</span>
                <span>n</span>
                <span>é</span>
                <span>n</span>
                <span>a</span>
                <span>S</span>
                <span>l</span>
                <span>o</span>
                <span>v</span>
                <span>e</span>
                <span>n</span>
                <span>s</span>
                <span>k</span>
                <span>u</span>
              </p>
              <p className={styles.subtitleMiddle}>
                <span>R</span>
                <span>u</span>
                <span>č</span>
                <span>n</span>
                <span>á</span>
                <span>v</span>
                <span>ý</span>
                <span>r</span>
                <span>o</span>
                <span>b</span>
                <span>a</span>
              </p>
            </div>

            {/* <ul>
              <li>
                <p className={styles.subtitle}>Vyrobené na Slovensku</p>
              </li>
              <li>
                <p className={styles.subtitle}>Ručná výroba</p>
              </li>
              <li>
                <p className={styles.subtitle}>Podľa vašich rozmerov</p>
              </li>
            </ul> */}
          </div>
          <div className={styles.rightPart}>
            <Link href={""} className={styles.linkRightPart}>
              <div className={styles.wrapperMainImg}>
                <Image
                  src={pictureRedact}
                  alt="Picture of shelf"
                  // priority
                  className={styles.mainImg}
                />
                <Image
                  src={pictureTable}
                  alt="Picture of shelf"
                  // priority
                  className={styles.podvesUnderShelfImg}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
