import { useState, useContext } from "react";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResBox from "./components/home/res-searchall/resbox";
import Signup from "./components/login/sign up/signup";
import Signin from "./components/login/sign in/signin";

function App() {
  const [InputValue, setvalue] = useState("");
  const [ResAPI, setRes] = useState();

  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
