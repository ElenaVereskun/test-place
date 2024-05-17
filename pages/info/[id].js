import React from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import styles from "../styles/[id].module.css";

export default function Id({ repo }) {
  const dataBank = repo.suggestions;
  console.log(dataBank);
  return (
    <div className={styles.container}>
      <Search data={repo} />
      <ul>
        {dataBank.map((item) => (
          <Card
            key={item.data.kpp}
            title={item.value}
            adress={item.data.address.value}
          />
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
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
  const res = await fetch(url, options);
  const repo = await res.json();
  return { props: { repo } };
};
