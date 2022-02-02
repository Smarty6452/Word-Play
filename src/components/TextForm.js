import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
    //    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = (event) => {
   let text = document.getElementById("myBox");
   text.select();
 
   navigator.clipboard.writeText(text.value);
  };
  const handleSpaces = () => {
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
  };
  
  const [text, setText] = useState("");
  // text = " new" weong way
  // setText("hello"); correct way

  return (
    <> 
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>

      <h2>{props.heading} -</h2>
      <div className="mb-3">
        {/* <label for="mybox" className="form-label"></label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode=== 'dark'?'#2a2525':'white', color: props.mode=== 'dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-dark mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-dark mx-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-dark mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-dark my-2 mx-1" onClick={handleCopy}>
       Copy text
      </button>
      <button className="btn btn-dark my-2 mx-1" onClick={handleSpaces}>
       Remove extra spaces
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2>Youre text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text: " Enter Something in the textbox above to preview it here"} </p>
    </div>
    </>
  );
}
