"use server";

import Image from "next/image";
import pictureRedact from "../../../public/img/shelf-zel-redakt.webp";
import pictureTable from "../../../public/img/svg/tablichka-pod-polku.svg";
import { Subtitle } from "./subtitle/subtitle";
// import pictureTools from "../../../public/img/svg/tools.svg";

// ВКЛЮЧИТЬ ПОДВЕС

// import picturePodves from "../../../public/img/svg/podves.svg";

import styles from "./styles.module.scss";
import Link from "next/link";

interface TitlesBlockProps {
  title: string;
  subtitleFirst: string;
  subtitleSecond: string;
}

export async function TitlesBlock({ title, subtitleFirst, subtitleSecond }: TitlesBlockProps) {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <Image src={pictureTools} className={styles.toolsImg} alt="" /> */}
          {/* <Image src={picturePodves} className={styles.podvesImg} alt="" /> */}

          <div className={styles.leftPart}>
            <h1 className={styles.title}>{title}</h1>
            {/* hgroup add */}
            <div className={styles.subtitlesBlock}>
              <Subtitle text={subtitleFirst} variant="top" />
              <Subtitle text={subtitleSecond} variant="middle" />
            </div>
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
