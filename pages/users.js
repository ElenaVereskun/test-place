import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./styles/users.module.css";

const Users = ({ users }) => {
  return (
    <div className={styles.container}>
      <h1>Second page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
