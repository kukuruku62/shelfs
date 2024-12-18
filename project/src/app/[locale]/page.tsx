
import { use } from "react";
import {setRequestLocale} from 'next-intl/server';
// import { Locale } from "@/i18n/routing";
import { Selection } from "@/components/selection/selection";
import styles from "./styles.module.scss";
import { TitlesBlock } from "@/components/titles-block/titles-block";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{locale: string}>;
};


export default function HomePage(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <main className={styles.main}>
      <TitlesBlock title={t("title")} subtitleFirst={t("subtitles.first")} subtitleSecond={t("subtitles.second")} />
      <Selection />
    </main>
  );
}
