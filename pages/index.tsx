import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const t = useTranslations("Index");

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {t.rich("hello", {
            link: (children: any) => (
              <a href="https://nextjs.org">{children}</a>
            ),
          })}
        </h1>
        <div className="flex row button-box">
          <Link href="/" locale="en">
            <a>English</a>
          </Link>
          <Link href="/" locale="da">
            <a>Dansk</a>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title {
          text-align: center;
        }
        .flex {
          width: 50%;
          display: flex;
        }
        .row {
          flex-direction: row;
        }
        .button-box {
          justify-content: space-evenly;
        }
        button {
          width: 40%;
          justify-content: space-evenly;
          margin-top: 50px;
          padding: 8px;
          border-radius: 5px;
          border: none;
        }
        .primary {
          background-color: #0070f3;
          color: #fff;
        }
        .secondary {
          border: 1px solid #e2e2e2;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Outfit, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export function getStaticProps({ locale }: any) {
  return {
    props: {
      messages: require(`../locales/index/${locale}.json`),
    },
  };
}

export default Home;
