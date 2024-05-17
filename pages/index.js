import React from "react";
import Search from "./components/Search";

const Index = ({ data }) => {
  return (
    <div>
      <Search data={data} />
    </div>
  );
};
export default Index;

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
