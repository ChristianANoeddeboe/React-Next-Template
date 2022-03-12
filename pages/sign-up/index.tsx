import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
};

export default index;
