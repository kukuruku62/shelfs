"use server";

import clsx from "clsx";
import styles from "./styles.module.scss";

interface SubtitleProps {
  text: string;
  variant: "top" | "middle";
}

export async function Subtitle({ text, variant }: SubtitleProps) {
  return (
    <div className={styles.subtitleWrapper}>
      <p className={styles.subtitle}>
        {text.split("").map((el, index) => {
          return (
            <span
              key={index}
              className={clsx(
                variant === "top" && {
                  [styles.upperLetter]: el === el.toUpperCase() && el !== el.toLowerCase(),
                  [styles.lowerLetter]: el === el.toLowerCase() && el !== el.toUpperCase(),
                },
                variant === "middle" && {
                  [styles.upperLetter2]: el === el.toUpperCase() && el !== el.toLowerCase(),
                  [styles.lowerLetter2]: el === el.toLowerCase() && el !== el.toUpperCase(),
                }
              )}
            >
              {el}
            </span>
          );
        })}
      </p>
      <span
        className={clsx(
          variant === "top" && [styles.shelfImageTop],
          variant === "middle" && [styles.shelfImageMiddle]
        )}
      ></span>
    </div>
  );
}