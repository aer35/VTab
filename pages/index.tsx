import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import PersonComponent from "../components/Person";
import Item from "../model/Item";
import Person from "../model/Person";

const DarkMode = dynamic(() => import("../components/Darkmode"), {
  ssr: false,
});

// Darkmode manager function
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

  const [people, setPeople] = useState<Person[]>([
    { items: [{ name: "", cost: 0 }] },
    { items: [{ name: "", cost: 0 }] },
  ]);

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
              {people.map((person, i) => (
                <PersonComponent
                  index={i + 1}
                  items={person.items}
                  setItems={(items) => {
                    people[i] = { items };
                    setPeople([...people]); //forces rerender
                  }}
                />
              ))}

              <div className="addPersonButton">
                <a
                  href="javascript:void(0)"
                  onClick={() =>
                    setPeople([...people, { items: [{ name: "", cost: 0 }] }])
                  }
                >Add another person</a>
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
