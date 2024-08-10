import styles from "./signin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Signin() {
  async function btnHandler(e) {
    e.preventDefault();
    console.log("clicked");
    const resapi = await axios.get("https://reqres.in/api/users/");
    console.log(resapi);
  }
  return (
    <div className={styles.main}>
      <form action="" className={styles.formlogin}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email" />
        <input type="email" placeholder="Password" />
        <button onClick={btnHandler}>Ok</button>
      </form>
      <Link to={"/signup"}>
        <p>Don’t have an account?</p>
      </Link>
    </div>
  );
}

export default Signin;
