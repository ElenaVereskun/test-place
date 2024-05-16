import { React } from "react";
import Link from "next/link";
import styles from "./styles/error.module.css";

function Error() {
  return (
    <section className={styles.error}>
      <h2 className={styles.error__title}>404</h2>
      <p className={styles.error__text}>Страница не найдена</p>
      <Link href="/">
        <button className={styles.error__back}>Назад к поиску</button>
      </Link>
    </section>
  );
}
export default Error;
