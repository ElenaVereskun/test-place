import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Popup from "../components/popup";

export default function Card({ title, adress }) {
  const [isOpen, setIsOpen] = useState(false);
  const { query } = useRouter();

  function openPopup() {
    setIsOpen(true);
  }
  return (
    <li style={{ listStyleType: "none", paddingBottom: "40px" }}>
      <h1>{title}</h1>
      <p>ИНН : {query.id}</p>
      <a href="/" onClick={openPopup}>
        Адрес: {adress}
      </a>
      <Popup isOpen={isOpen} />
    </li>
  );
}
