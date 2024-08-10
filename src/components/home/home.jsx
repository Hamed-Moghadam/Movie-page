import { useState } from "react";
import styles from "./home.module.css";
import MainBox from "./main-box-home/box";
import SearchBoxAll from "./search-box/searchbox";
import ResBox from "./res-searchall/resbox";
import Navbar from "./navbar/nav";
import SignIn from "../login/sign up/signup";

function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.textmain}>
          <p>
            You can find anything related to,
            <span>Series</span>,<span> Movie</span>,<span>Anime </span>
            on this website
          </p>
        </div>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.comp}>
          <SearchBoxAll />
          <ResBox />
        </div>
        <div className={styles.mainbox}>
          <MainBox />
        </div>
      </div>
    </>
  );
}

export default Home;
