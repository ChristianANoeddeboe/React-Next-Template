import React from "react";
import type { GetStaticPropsContext, NextPage } from "next";
import styles from "../../styles/Home.module.css";
import OfferingTitle from "./OfferingTitle";
import Header from "../../components/layout/Header";

const index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <OfferingTitle />
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like, but the recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: await import(`../../messages/index/${locale}.json`),
    },
  };
}

export default index;
