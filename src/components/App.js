
import React,{useState} from "react";
import './../styles/App.css';
import Weather from ./WeatherDisplay.js

const App = () => {

  const[input,setinput]=useState( { temperature: 25, conditions: "Sunny" });
  
  return (
    <div id="container">
    <Weather data={input}/>
        
    </div>
  )
}

export default App
