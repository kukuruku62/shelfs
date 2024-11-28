"use server";

import Image from "next/image";
import pictureFasade from "../../../public/img/svg/fasad-high.svg";
import pictureFruits from "../../../public/img/svg/fruits.svg";
import pictureToster from "../../../public/img/svg/toster2.svg";
import pictureCup from "../../../public/img/svg/cup.svg";
import styles from "./styles.module.scss";

export async function Footer() {
  return (
    <footer>
      <div className={styles.desk}> 
        <Image alt="" src={pictureFruits} className={styles.fruits}/>
        <Image alt="" src={pictureToster} className={styles.toster}/>
        <Image alt="" src={pictureCup} className={styles.cup}/>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>

        </div>
        <Image alt="" src={pictureFasade} className={styles.pictureFasede} />
        <Image alt="" src={pictureFasade} className={styles.pictureFasede} />
      </div>

      {/* <div className={styles.fasades}></div> */}
    </footer>
  );
}
