import Link from "next/link";

import styles from "../styles/popup.module.css";

export default function Popup({ isOpen }) {
  return (
    <div className={isOpen ? styles.popup : styles.popupBlock}>
      <div className={styles.popupContainer}>
        <h3>Вы действительно хотите перейти на внешний ресурс?</h3>
        <div className={styles.buttons}>
          <Link href="/">
            <button className={styles.buttonStay}>Отказаться</button>
          </Link>
          <Link href="/">
            <button className={styles.buttonMoveOn}>Перейти</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
