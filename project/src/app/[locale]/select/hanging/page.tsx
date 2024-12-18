// import Picture1 from "../../../../public/img/hanging-shelfs/1/1.jpg";
// import Picture2 from "../../../../public/img/hanging-shelfs/2/1.jpg";
// import Picture3 from "../../../../public/img/hanging-shelfs/3/1.jpg";
// import Picture4 from "../../../../public/img/hanging-shelfs/4/1.jpg";

// import Link from "next/link";
// import Image from "next/image";

// import styles from "./styles.module.scss";

// const data = [
//   {
//     item: "1",
//     picture: Picture1,
//     href: "/hanging-1",
//   },
//   {
//     item: "2",
//     picture: Picture2,
//     href: "/hanging-2",
//   },
//   {
//     item: "3",
//     picture: Picture3,
//     href: "/hanging-3",
//   },
//   {
//     item: "4",
//     picture: Picture4,
//     href: "/hanging-4",
//   },
// ];

export default function Selection() {
  return (
    <section>
      {/* <div className={styles.container}>
        <div className={styles.content}>
          <h1>Závesné police</h1>

          <ul className={styles.list}>
            {data.map(({ item, href, picture }) => (
              <li key={item} className={styles.itemPreviewContainer}>
                <Link href={href} className={styles.link}>
                  <div className={styles.pictureContainer}>
                    <Image alt="Picture of shelf" src={picture} className={styles.picture} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </section>
  );
}
