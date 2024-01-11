import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("upper case was clicked");
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowClick = () => {
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    let newtext='';
    setText(newtext)
    props.showAlert("Text is Cleared!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Converted to Speech", "success");
  }
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  
  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleUpClick}>
        convert to upper case
      </button>
      <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={handleLowClick}>
        convert to lower case
      </button>
      <button className="btn btn-primary my-2" disabled={text.length===0} onClick={handleClearClick}>
        Clears Text
      </button>
      <button type="submit" onClick={speak} className="btn btn-danger mx-2 my-2" disabled={text.length===0}>
        Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter Something In TextBox To Preview"}</p>
    </div>
    </>
  );
}
