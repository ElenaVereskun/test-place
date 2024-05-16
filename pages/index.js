import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import search from "./images/search.svg";

import styles from "./styles/index.module.css";

const Index = ({ data }) => {
  const [innValue, setInnValue] = useState("");
  const [isInn, setIsInn] = useState(true);

  const handleChange = (event) => {
    setInnValue(event.target.value);
  };
  function searchByInn() {
    const dataInn = data.suggestions.filter(
      (item) => item.data.inn === innValue
    );
    if (dataInn.every((item) => item === null)) {
      setIsInn(false);
    } else {
      setIsInn(true);
    }
  }
  console.log(data);
  return (
    <div>
      <div className={styles.container}>
        <form className={styles.search} onChange={handleChange}>
          <input
            className={styles.input}
            value={innValue}
            placeholder="Укажите ИНН"
            type="number"
          ></input>
          <button onClick={searchByInn}>
            {isInn ? (
              <Link href={`/info/${innValue}`}>
                <Image
                  src={search}
                  className={styles.inputImg}
                  alt="поиск"
                  width={40}
                  height={40}
                />
              </Link>
            ) : (
              <Link href="/error">
                <Image
                  src={search}
                  className={styles.inputImg}
                  alt="поиск"
                  width={40}
                  height={40}
                />
              </Link>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Index;
/* 7707083893 */

export async function getStaticProps() {
  var url =
    "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
  var token = "04d61ad173df85b960cc9e9ed8d948dbecf2d939";
  var query = "7707083893";

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return {
    props: { data },
  };
}
