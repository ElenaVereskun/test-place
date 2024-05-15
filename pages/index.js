import Link from "next/link";
import styles from "./styles/index.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">Main</Link>
        <Link href="/users">Users</Link>
      </div>
      <h1>Main page</h1>
    </div>
  );
};
export default Index;
