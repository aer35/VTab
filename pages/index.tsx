import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { markAsUntransferable } from "worker_threads";

const DarkMode = dynamic(() => import("../components/Darkmode"), {
  ssr: false,
});

interface Item {
  name: string;
  cost: number;
}

const Person: React.FC<{ index: number }> = ({ index }) => {
  let [items, setItems] = useState<Item[]>([
    {
      name: "",
      cost: 0,
    },
  ]);

  return (
    <div className="grid-person">
      <div className="grid-item" style={{ gridRow: `span ${items.length}` }}>
        <label>Person {index}</label>
        <br />
        <input type="text" placeholder={`Person ${index}'s name`} required />
      </div>
      <PersonItem index={1} item={items[0]} />

      <div
        className="addItemButton"
        style={{ gridRow: `span ${items.length}` }}
      >
        <a
          href="javascript:void(0)"
          onClick={() =>
            setItems([
              ...items,
              {
                name: "",
                cost: 0,
              },
            ])
          }
        >
          Add another item
        </a>
      </div>

      {items.slice(1).map((item, i) => (
        <PersonItem key={i} index={i + 2} item={item} />
      ))}
    </div>
  );
};

const PersonItem: React.FC<{ index: number; item: Item }> = ({
  index,
  item,
}) => {
  return (
    <>
      <div className="grid-item">
        <label>Item {index}</label> <br />
        <input type="text" placeholder={`Item ${index}`} value={item.name} ></input>
      </div>

      <div className="grid-item">
        <label>Cost</label>
        <br />
        <input type="text" placeholder="Cost"></input>
      </div>
    </>
  );
};

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

              <Person index={3} />
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
