import styles from "./styles.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export {Skeleton};
