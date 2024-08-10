import styles from "./nav.module.css";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <FiLogIn />
          Login
          <ul className={styles.submenu}>
            <li>
              <Link to={"/signup"}> sign up</Link>
            </li>
            <li>
              <Link to={"/signin"}> sign in</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
