import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import search from "../images/search.svg";

import styles from "../styles/search.module.css";

const Search = ({ data }) => {
  const [innValue, setInnValue] = useState("");
  const [isInn, setIsInn] = useState(true);

  const handleChange = (event) => {
    setInnValue(event.target.value);
  };

  function searchByInn() {
    const dataInn = data.suggestions.filter((item) => {
      item.data.inn === innValue;
    });
    if (dataInn.every((item) => item === null)) {
      setIsInn(false);
    } else {
      setIsInn(true);
    }
  }

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
export default Search;
