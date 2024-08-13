import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./anime.module.css";

function Anime(props) {
  const [animeData, setAnimeData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = props.animes.map((name) =>
          axios.get(`http://www.omdbapi.com/?t=${name}&apikey=91b942a2`)
        );
        const results = await Promise.all(promises);
        console.log(promises);
        const data = results.map((result) => result.data);
        setAnimeData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  console.log(props.animes);
  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.headertitle}>{props.tittle}</h1>
      <div className={styles.searchbox}>
        <input type="text" placeholder={'Add '+props.tittle} />
        <button>Ok</button>
      </div>

      <div className={styles.container}>
        {error && <p>Error: {error}</p>}
        {animeData.length > 0 ? (
          animeData.map((data, i) => (
            <div key={i}>
              <img
                src={data.Poster}
                alt="image anime"
                className={styles.imganime}
              />
              <div className={styles.textcontainer}>
                <h2>{data.Title}</h2>
                <p>{data.Plot}</p>
                <p>Year: {data.Year}</p>
                <p>Director: {data.Director}</p>
              </div>
            </div>
          ))
        ) : (
          <p
            style={{
              color: "#fff",
              transform: "rotate(180deg)",
              fontSize: "30px",
            }}
          >
            ...Loading
          </p>
        )}
      </div>
    </div>
  );
}

export default Anime;
