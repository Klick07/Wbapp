// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import React from "react";
import Navbar  from "./components/navbar";
import Div from "./components/div";

function App() {
  const [dark, setDark] = useState("light");
  const darkmode = () => {
    // if (dark === "dark") setDark("light");
    // else setDark("dark");
    dark==="dark" ? setDark("light") : setDark("dark");
    // console.log(dark);
  }
  return (
    <div className={`App bg-${dark} text-${dark==='dark'?'white':'black'} height-100`} >
      <Navbar title="Toggle Dark Mode" darkmode={darkmode} dark={dark} />
      <Div heading="This is a heading" paragraph="This is a paragraph." darkmode={darkmode} dark={dark} />
    </div>
  );
}

export default App;
