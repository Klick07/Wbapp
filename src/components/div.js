import { useState } from "react";
// import React from "react";


function Div(pro) {
    const [str, setStr] = useState("Initial text");
    // const [count, setCount] = useState(0);
    const onchange=(event)=>{
        // console.log("Text area changed");
        setStr(event.target.value);
        console.log(str.split(" "));
    };
    const wordss = ()=>{
      let words = str.split(" ");
      let wordslen = words.length;
      for (let i=0;i<words.length;i++){
        if (words[i]===""){
          wordslen-=1;
        }
      }
      return wordslen;
    }
    // console.log(wordss());

  return (
    <div className={`container bg-${pro.dark} text-${pro.dark==='dark'?'white':'black'}`}>
        <h1>{pro.heading}</h1>
        <div className="container">
            <textarea className={`container mb-3 bg-${pro.dark==='dark'? 'light' : 'dark'} text-${pro.dark}`} value={str} onChange={onchange}></textarea>
        </div>
        <button className="btn btn-primary mb-3" onClick={()=>{setStr(str.toUpperCase())}}>OnUpperCase</button>
        <button className="btn btn-danger mb-3" onClick={()=>{setStr("")}}>OnClear</button>
        <h2>Your text summary</h2>
        <p>{wordss()} words and {str.length} characters</p>
        <p>{0.008 * str.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{str.length>0?str:"Nothing to preview!"}</p> 
    </div>
  );

}

export default Div;