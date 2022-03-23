import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import PersonComponent from "../components/Person";
import Person from "../model/Person";

// TODO
// Consider refactoring objects to make the program actually have a purpose
// Currently, there is no point to adding each persons items and splitting.
// Use the splitwise app as a reference for useful functionality

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
    { name: "", items: [{ name: "", cost: 0 }] },
    { name: "", items: [{ name: "", cost: 0 }] },
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetch("http://localhost:3001/bills/123/total", {
                body: JSON.stringify({
                  persons: people.map((person) => person.name),
                  items: people.flatMap((person) =>
                    person.items.map((item) => item.cost)
                  ),
                }),
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
              })
                .then((res) => res.json())
                .then((resBody) => {
                  alert(`Each person pays: $${resBody.partial}`);
                });
            }}
          >
            <div className="grid-main">
              {people.map((person, i) => (
                <PersonComponent
                  index={i + 1}
                  person={person}
                  setPerson={(person) => {
                    people[i] = person;
                    setPeople([...people]); //forces rerender
                  }}
                />
              ))}

              <div className="addPersonButton">
                <button
                  type="button"
                  onClick={() =>
                    setPeople([
                      ...people,
                      { name: "", items: [{ name: "", cost: 0 }] },
                    ])
                  }
                >
                  Add another person
                </button>
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
