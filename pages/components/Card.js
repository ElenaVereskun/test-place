import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Popup from "../src/popup";

export default function Card({ title, name, post, adress }) {
  const [isOpen, setIsOpen] = useState(false);
  const { query } = useRouter();

  function openPopup() {
    setIsOpen(true);
  }
  return (
    <li style={{ listStyleType: "none", paddingBottom: "40px" }}>
      <h1>{title}</h1>
      <h2>Основатель: {name}</h2>
      <h2>Должность: {post}</h2>
      <a href="/" onClick={openPopup}>
        Адрес: {adress}
      </a>
      <Popup isOpen={isOpen} />
    </li>
  );
}
