import Link from "next/link";
import Image from "next/image";
import search from "./images/search.svg";
import styles from "./styles/index.module.css";

const Index = () => {
  let arrData = [];
  console.log(arrData);

  function getData() {
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
      .then((response) => (arrData = response.text()))
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <div className={styles.container}>
        {/*  <Link href="/">Main</Link>
        <Link href="/users">Users</Link> */}
        <div className={styles.search}>
          <input
            className={styles.input}
            value={457}
            placeholder="Укажите ИНН"
          ></input>
          <button onClick={getData}>
            <Image
              src={search}
              className={styles.inputImg}
              alt="поиск"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
