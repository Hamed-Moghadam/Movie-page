import axios from "axios";
import { useState } from "react";
import styles from "./signup.module.css";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Signup() {
  const [passtype, settype] = useState("password");
  const [see, setsee] = useState("none");
  const [dontsee, setdontsee] = useState("inline");
  const [inputs, setvalue] = useState({});

  function seepass() {
    if (see == "none") {
      settype("text");
      setsee("inline");
      setdontsee("none");
    } else {
      settype("password");
      setsee("none");
      setdontsee("inline");
    }
  }
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setvalue((values) => ({ ...values, [name]: value }));
  }
  async function sendform(e) {
    e.preventDefault();
    const resreq = await axios.post("https://reqres.in/api/users", inputs);
    location.replace("/signin");
    console.log(resreq);
  }
  return (
    <div className={styles.main}>
      <h1>Sign Up</h1>
      <form action="/signin">
        <label htmlFor="name">first name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handlechange}
        />

        <label htmlFor="namefamily">last name:</label>
        <input
          type="text"
          id="namefamily"
          name="namefamily"
          required
          onChange={handlechange}
        />

        <label htmlFor="pss">
          <FaEyeSlash style={{ display: dontsee }} onClick={seepass} />
          <IoEyeSharp style={{ display: see }} onClick={seepass} /> Password:
        </label>
        <input
          type={passtype}
          id="pss"
          name="pss"
          required
          onChange={handlechange}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handlechange}
        />
        <input
          type="submit"
          value="OK"
          onClick={sendform}
          className={styles.okhandler}
        />
      </form>
      <Link to={"/signin"}>
        <p>do you have account</p>
      </Link>
    </div>
  );
}

export default Signup;
