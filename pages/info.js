import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/users.module.css";

const InfoPage = () => {
  /*   useEffect(async () => {
    const response = await fetch(
      `http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party`
    );
    const data = await response.json();
    console.log(data);
  }, []); */
  return (
    <div className={styles.container}>
      <h1>Second page</h1>
      {/*      <ul>
        {info.map((item) => (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default InfoPage;

/* export async function getStaticProps() {
  const response = await fetch(
    `http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party`
  );
  const info = await response.json();
  return {
    props: { info },
  };
}
 */
