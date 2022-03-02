import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Person from "../components/Person";

const DarkMode = dynamic(() => import("../components/Darkmode"), {
  ssr: false,
});

const Home: NextPage = () => {
  useEffect(() => {
    // dynamic import to circumvent import time window generation
    import("darkreader").then((DarkReader) =>
      DarkReader.auto({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      })
    );
  }, []);

  const [people, setPeople] = useState("");

  return (
    <div className={styles.container}>
      {/* <DarkMode /> */}
      <Head>
        <title>Create Next App</title>
        <meta name="VTab" content="Web app for splitting payments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
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
        </div>
        <div>
          <form>
            <div className="grid-main">
              <Person index={1} />
              <Person index={2} />

              <div className="addPersonButton">
                <a
                  href="javascript:void(0)"
                  onClick={() => setPeople(people + 1)}
                ></a>
              </div>
            </div>
            <div>
              <input type="submit" value="SPLIT"></input>
            </div>
          </form>
        </div>
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
