import Navbar from "./Component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Text from "./Component/text";
import About from "./Component/about";
import React,{useState} from "react";
import Alert from "./Component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




export default function App(){
  const [mode,setmode]=useState('light')
  const [alert,setalert]=useState(null)

  const Showalert =(message,type)=>{
    setalert({
        msg:message,
        type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
    const toggleMode=()=>{
    console.log('function called')
   if(mode==="light"){
    setmode("dark")
    Showalert("Dark mode enabled","success")
    document.body.style.backgroundColor="grey"
   }else{
    setmode("light")
    Showalert("light mode enabled","success")
    document.body.style.backgroundColor="white"
   }
  }

  return(
    <>
  <Router>
  <Navbar textutil='Textutils' mode ={mode} toggle ={toggleMode} />
  <Alert alert={alert}  />
  {/* <Text showalert={Showalert} /> */}
      <Routes>
        <Route path="/about" element={<About mode ={mode}/>} />
        <Route path="/" element={<Text showalert={Showalert} mode ={mode}/>} />
      </Routes>
    </Router>
  </>
  )
}

