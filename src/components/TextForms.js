import React,{useState} from 'react'

export default function TextForms(props) {
const handleuppercase =()=>{
  console.log("Uppercase was clicked"+text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase!","success");
}
const handlelowercase =()=>{
  console.log("lowercase was clicked"+text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase!","success");
}
const handleCleartext =()=>{
  let newText = "";
  setText(newText);
}
const handleExtraspaces =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}
// const handleCopytext =()=>{
  
//   var Text = document.getElementById("mybox");
//     Text.select();
//   navigator.clipboard.writeText(Text.value);
// }
const handleOnChange= (event)=>{
  console.log('onchange');
  setText(event.target.value);
}


  const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white' :'black'}} >
      <h2>{props.heading}</h2>
        <div className="mb-3">
        
      
        <textarea className="mybox" value={text} style={{ backgroundColor: props.mode ==='dark' ? 'grey':'white', color: props.mode ==='dark'?'white' :'black' }}  onChange={handleOnChange} rows="8"></textarea>

        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleuppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCleartext}>Clear text</button>
        {/* <button className="btn btn-primary mx-2 my-2" onClick={handleCopytext}>Copy text</button> */}
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraspaces}>remove extra spaces</button>
        </div>
        < div className="container my-3" style={{color: props.mode ==='dark'?'white' :'black'}}>
         <h1>Your text  summary</h1>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
         <p>{0.008* text.split(" ").length} wpm</p>

    </div>
      </>
  )
}
