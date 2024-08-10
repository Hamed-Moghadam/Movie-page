import { useState } from "react";
import styles from "./box.module.css";

function MainBox() {
  const [boxvalue, setvalue] = useState([
    {
      name: "Anime",
      phpto: "../../../../asset/wallpaperflare.com_wallpaper (1).jpg",
    },
    { name: "Movie", phpto: "../../../../asset/movie.jpg" },
    {
      name: "series",
      phpto:
        "../../../../asset/wp12681161-game-of-thrones-desktop-4k-wallpapers.jpg",
    },
  ]);
  return boxvalue.map((box, i) => {
    return (
      <div className={styles.box} key={i}>
        <div className={styles.hover}>
          <h1 className={styles.tittle}>{box.name}</h1>
          <img className={styles.photo} src={box.phpto} alt="" />
        </div>
      </div>
    );
  });
}

export default MainBox;
