import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import search from "./images/search.svg";

import styles from "./styles/index.module.css";

const Index = () => {
  const [innValue, setInnValue] = useState("");

  const handleChange = (event) => {
    setInnValue(event.target.value);
  };

  let arrData = [];

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

  fetch(url, options)
    .then((response) => response.json())
    .then((result) => (arrData = result))
    .catch((error) => console.log("error", error));

  function searchByInn() {
    const data = arrData.suggestions;
    data.filter((item) => item.data.inn === innValue);
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
            /*  minLength="10"
            maxLength="10" */
          ></input>
          <button onClick={searchByInn}>
            <Link href={`/info/${innValue}`}>
              <Image
                src={search}
                className={styles.inputImg}
                alt="поиск"
                width={40}
                height={40}
              />
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Index;
