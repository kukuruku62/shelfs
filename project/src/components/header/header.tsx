"use server";
import "server-only";

import Link from "next/link";
import styles from "./styles.module.scss";


const listLinks = [
  { item: "1", name: "Domov", href: "/" },
  { item: "2", name: "Skontrolovať objednávku", href: "/check-order" },
  { item: "3", name: "Kontakt", href: "/contacts" },
];

export async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.list}>
            {listLinks.map(({ item, href, name }) => (
              <li key={item}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
