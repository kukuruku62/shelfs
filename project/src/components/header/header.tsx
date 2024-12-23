"use server";
import "server-only";

// import pictureFasade from "../../../public/img/svg/fasad.svg";


// import Image from "next/image";
// import Link from "next/link";

import CustomSelectLocales from "../ui/CustomSelectLocales/CustomSelectLocales";
import styles from "./styles.module.scss";

// const listLinks = [
//   { item: "1", img: pictureFasade, href: "/", title: "Domov" },
//   { item: "2", img: pictureFasade, href: "/contacts", title: "Kontakt" },
// ];


export default async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <CustomSelectLocales />
          {/* <nav>
            <ul className={styles.list}>
              {listLinks.map(({ item, href, img, title }) => (
                <li key={item}>
                  <Link href={href} className={styles.link}>
                    <p className={styles.nameLink}>{title}</p>
                    <Image src={img} alt="" className={styles.pictureFasade} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
        </div>
      </div>
    </header>
  );
}
