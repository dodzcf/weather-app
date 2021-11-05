import '../components/weather.css';
import './sun.css'
import { useState,useEffect } from 'react';
import thermometer from '../components/production/line/all/thermometer-celsius.svg';
import cloud from '../components/production/line/all/overcast.svg';
import lowtemp from "../components/production/line/all/thermometer-colder.svg";
import Wind from "../components/production/line/all/wind.svg";
const axios = require('axios');
const Clouds= () => {
    
    const [city,setCity]=useState('');
    const [temp,setTemp]=useState(null);
    const [feels,setFeels]=useState(0);
    const [templow,setTemplow]=useState(0);
    const [windspeed,setWindspeed]=useState(0);
    const [sky,setSky]=useState('');
    
  
    useEffect(()=>
    {
        setCity(localStorage.getItem("city"));
        setTemp(localStorage.getItem("temp"));
        setSky(localStorage.getItem("sky"));
        setFeels(localStorage.getItem("feels"));
        setTemplow(localStorage.getItem("templow"));
        setWindspeed(localStorage.getItem("windspeed"));
    });



  return (
      <>
      <br/>
        <br/>
        <br/>
        <br/>
    <div className="container d-flex justify-content-center">
        
        <div className="fluid-jumbotron weatherjx">

        <br/>
        <h2 className="d-flex justify-content-center">{city}'s Weather</h2>
        <p className="">Temprature: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={thermometer} alt="" id="tempp"/>{temp}
        <br></br>
        Feels Like: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={thermometer} alt="" id="tempp"/> {feels}
        <br></br>
        Lowest Temprature: <img src={lowtemp} alt="" id="tempp"/> {templow}
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Sky: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={cloud} alt="" id="tempp"/> {sky}
        <br></br>
        Wind Speed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={Wind} alt="" id="tempp"/> {windspeed}

        
        
        </p>

    </div>
    </div>
    </>
    );

};
export default Clouds