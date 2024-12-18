
import {setRequestLocale} from 'next-intl/server';
import { Locale } from "@/i18n/routing";
import { Selection } from "@/components/selection/selection";
import styles from "./styles.module.scss";
import { TitlesBlock } from "@/components/titles-block/titles-block";
import { useTranslations } from "next-intl";

type Props = {
  params: {locale: string};
};


export default function HomePage({ params: { locale } }: Props) {

  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <main className={styles.main}>
      <TitlesBlock title={t("title")} subtitleFirst={t("subtitles.first")} subtitleSecond={t("subtitles.second")} />
      <Selection />
    </main>
  );
}
