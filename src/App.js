
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const[alert, setAlert] = useState(null);

  const[ mode, setMode]= useState('light');
  
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
      {setAlert(null);},1500);
    
  }
  const toggleMode = () => {
  if(mode === 'light')
      {
         setMode('dark');
         document.body.style.backgroundColor='#042743';
         showAlert("Dark mode has been enabled", "success");
         document.title="Textutils-Dark mode";
         setInterval(() => {
          document.title="Textutils is amazing";
         }, 2000);
         setInterval(() => {
          document.title="Textutils is live";
         }, 1500 );
      }
  else
      {
        setMode('light');
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled", "success");
       document.title="Textutils-light mode";
      }   
  

  }
  return (
  < >
  <Router>
  <Navbar title= "textutils" mode={mode} AboutText="AboutUs"  toggleMode ={toggleMode}/>
  
  <Alert alert={alert}/>
  
  <div className="container my-3">
  <Routes>
           {/* <Route path='/about'/> */}
            {/* <About />  */}
            <Route  path='/About' element={<About />}  />

          
          <Route  path='/'
             element={<TextForms showAlert={showAlert} mode={mode}  heading="Enter the text to analyz"/>} />  
            
  </Routes>
            
  </div>
  </Router>
  
  </>
  );
}

export default App;
