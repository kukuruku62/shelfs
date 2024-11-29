"use server";

import Image from "next/image";
import pictureRedact from "../../../public/img/shelf-zel-redakt.webp";
import pictureTable from "../../../public/img/svg/tablichka-pod-polku.svg";


import pictureTools from "../../../public/img/svg/tools.svg";
import picturePodves from "../../../public/img/svg/podves.svg";
import pictureBankaVhigh from "../../../public/img/svg/bankaVhigh.svg";
import pictureBankaShigh from "../../../public/img/svg/bankaShigh.svg";
import pictureBankaY from "../../../public/img/svg/bankaY.svg";
import pictureBankaR from "../../../public/img/svg/bankaR.svg";
import pictureBankaO from "../../../public/img/svg/bankaO.svg";
import pictureBankaB from "../../../public/img/svg/bankaB.svg";
import pictureBankaE from "../../../public/img/svg/bankaE.svg";
import pictureBankaN from "../../../public/img/svg/bankaN.svg";
import pictureBankaE2 from "../../../public/img/svg/bankaE2.svg";
import pictureBankaN2 from "../../../public/img/svg/bankaN2.svg";
import pictureBankaA from "../../../public/img/svg/bankaA.svg";
import pictureBankaL from "../../../public/img/svg/bankaL.svg";
import pictureBankaV from "../../../public/img/svg/bankaV.svg";
import pictureBankaSshort from "../../../public/img/svg/bankaSshort.svg";
import pictureBankaK from "../../../public/img/svg/bankaK.svg";
import pictureBankaU from "../../../public/img/svg/bankaU.svg";

import pictureBankaKrugR from "../../../public/img/svg/Banka-krugR.svg";
import pictureBankaKrugU from "../../../public/img/svg/Banka-krugU.svg";
import pictureBankaKrugC from "../../../public/img/svg/Banka-krugC.svg";
import pictureBankaKrugN from "../../../public/img/svg/Banka-krugN.svg";
import pictureBankaKrugA from "../../../public/img/svg/Banka-krugA.svg";
import pictureBankaKrugV from "../../../public/img/svg/Banka-krugV.svg";
import pictureBankaKrugY from "../../../public/img/svg/Banka-krugY.svg";
import pictureBankaKrugRshort from "../../../public/img/svg/Banka-krugRshort.svg";
import pictureBankaKrugO from "../../../public/img/svg/Banka-krugO.svg";
import pictureBankaKrugB from "../../../public/img/svg/Banka-krugB.svg";
import pictureBankaKrugA2 from "../../../public/img/svg/Banka-krugA2.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

// CHECK ARTICLES BEFORE LI?
export async function TitlesBlock() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <Image src={pictureTools} className={styles.toolsImg} alt="" /> */}
          {/* <Image src={picturePodves} className={styles.podvesImg} alt="" /> */}

          <div className={styles.leftPart}>
            <h1 className={styles.title}>Drevené police do kuchyne</h1>
            <div className={styles.holderImagesTop}>
              <Image src={pictureBankaVhigh} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaY} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaR} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaO} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaB} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaE} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaN} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaE2} className={styles.bankaImg} alt="" />

              <Image src={pictureBankaN2} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaA} className={styles.bankaImg} alt="" />

              <Image src={pictureBankaShigh} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaL} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaO} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaV} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaE} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaN} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaSshort} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaK} className={styles.bankaImg} alt="" />
              <Image src={pictureBankaU} className={styles.bankaImg} alt="" />
            </div>
            <div className={styles.holderImagesMiddle}>
              <Image src={pictureBankaKrugR} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugU} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugC} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugN} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugA} className={styles.canTwoImg} alt="" />

              <Image src={pictureBankaKrugV} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugY} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugRshort} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugO} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugB} className={styles.canTwoImg} alt="" />
              <Image src={pictureBankaKrugA2} className={styles.canTwoImg} alt="" />
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
                  priority
                  className={styles.mainImg}
                />
                <Image
                  src={pictureTable}
                  alt="Picture of shelf"
                  priority
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
