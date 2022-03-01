import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const DarkMode = dynamic(() => import("../components/Darkmode"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DarkMode />
      <Head>
        <title>Create Next App</title>
        <meta name="VTab" content="Web app for splitting payments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <span
            style={{
              color: "red",
            }}
          >
            Vtab
          </span>
        </h1>

        <h2 className={styles.subtitle}>
          A simple web app for splitting payments
        </h2>

        <div></div>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>
            {" "}
            Made with{" "}
            <a
              style={{
                color: "yellow",
              }}
              href="https://nextjs.org/"
            >
              Next.JS
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
