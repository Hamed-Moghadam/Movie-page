import { FaSearch } from "react-icons/fa";
import styles from "./searchbox.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function SearchBoxAll(props) {
  const [inputvalue, setvalue] = useState();

  function inputHandler(e) {
    setTimeout(() => {
      setvalue(e.target.value);
    }, 1500);
  }
  function SetUrl() {
    location.search = "?name=" + inputvalue;
    console.log(location.search);
    console.log(err);
  }
  function SetUrlkey(e) {
    if (e.key === "Enter") {
      location.search = "?name=" + inputvalue;
      console.log(location.search);
      console.log(err);
    }
  }
  return (
    <div className={styles.mainbox}>
      <input
        type="text"
        className={styles.searchall}
        placeholder="Search All"
        onChange={inputHandler}
        onKeyUp={SetUrlkey}
      />
      <FaSearch className={styles.searchicon} onClick={SetUrl} />
    </div>
  );
}
export default SearchBoxAll;
