import { useEffect, useState } from "react";
import styles from "./resbox.module.css";
import queryString from "query-string";
import axios from "axios";

function ResBox() {
  const moviesearch = queryString.parse(location.search);
  const [tittle, settittle] = useState();
  const [poster, setposter] = useState();
  const [year, setyear] = useState();
  const [summary, setsummary] = useState();
  const [imdbrate, setimdbrate] = useState();
  const [notfound, setnotfound] = useState();

  console.log(moviesearch.name);
  async function Apireq() {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?t=${moviesearch.name}&apikey=91b942a2`
      );
      settittle(data.Title);
      setposter(data.Poster);
      setyear(data.Year);
      setsummary(data.Plot);
      setimdbrate(data.imdbRating);
      setnotfound(data.Response);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (moviesearch.name) {
      Apireq();
    }
  }, []);

  if (moviesearch.name) {
    if (notfound == "False" || moviesearch.name == "undefined") {
      return (
        <div className={styles.resbox}>
          <h1>Not Found </h1>
        </div>
      );
    } else {
      return (
        <div className={styles.resbox}>
          <div className={styles.text}>
            {" "}
            <h1>
              <span> {tittle}</span>

              <span> {year}</span>
            </h1>
            <h3>
              <span>summary:</span>
              <p>{summary}</p>
            </h3>
            <h4>
              <span>IMDB:</span>
              <span> {imdbrate}</span>
            </h4>
          </div>

          <img src={poster} alt="Movie poster" />
        </div>
      );
    }
  }
}

export default ResBox;
