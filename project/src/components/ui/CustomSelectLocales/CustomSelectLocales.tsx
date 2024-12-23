"use client";

import { MouseEvent, useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import clsx from "clsx";
import styles from "./styles.module.scss";


export default function CustomSelectLocales() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const defaultLocale = useLocale();
  const [, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentLocale, setCurrentLocale] = useState<string>(defaultLocale);
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  const onClickChangeLocale = (event: MouseEvent<HTMLLIElement>) => {
    const valueLocale = event.currentTarget.dataset.value as Locale;

    if (valueLocale === defaultLocale) {
      return;
    }

    if (valueLocale) {
      setCurrentLocale(valueLocale);
      startTransition(() => {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          { pathname, params },
          { locale: valueLocale }
        );
      });
    }
  };

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };


  return (
    <div className={styles.selectContainer} onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
      <p className={clsx(
                defaultLocale === "sk" && [styles.currentLocale, styles.currentLocale_sk],
                defaultLocale === "de" && [styles.currentLocale, styles.currentLocale_de],
                defaultLocale === "en" && [styles.currentLocale, styles.currentLocale_en]
              )}>{currentLocale}</p>
      {isOpen && (
        <ul className={styles.listLocales} >
          {routing.locales.map((locale) => (
            <li
              data-value={locale}
              key={locale}
              onClick={onClickChangeLocale}
              className={clsx(
                locale === "sk" && [styles.item, styles.item_sk],
                locale === "de" && [styles.item, styles.item_de],
                locale === "en" && [styles.item, styles.item_en]
              )}
            >
              {locale}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
