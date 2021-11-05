import './weather.css';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
const axios = require('axios');
const Weather= () => {
    
    const [city,setCity]=useState('');
    
    localStorage.setItem('city',city);
  const history=useHistory();

    const loginuser = async (e)=>
    {
      e.preventDefault();
    
        const res = await axios.get(
            "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=32f98c45578553132690fc15808f3754",
        )
        const delay = ms => new Promise(res => setTimeout(res, ms));
        localStorage.setItem('city',city);
        // alert(JSON.stringify(res.data.wind))
        const tempK=res.data.main.temp;
        const tempC=parseInt(tempK-273);
        localStorage.setItem('temp',tempC+" °C");

        /////Feels like
        const tempKfeels=JSON.stringify(res.data.main.feels_like);
        const tempCfeels=parseInt(tempKfeels-273);
        localStorage.setItem('feels',tempCfeels+" °C");

        const tempKlow=JSON.stringify(res.data.main.temp_min);
        const tempClow=parseInt(tempKlow-273);
        // setTemplow(tempClow+" °C");
        localStorage.setItem('templow',tempClow + " °C");

        localStorage.setItem("windspeed",JSON.stringify(res.data.wind.speed));
        localStorage.setItem('sky',res.data.weather[0].description);
        
        // alert(JSON.stringify(res.data.wind));
        

        await delay(1000);
        if(localStorage.getItem("sky")=="clear sky" || localStorage.getItem("sky")=="clear")
        {
          history.push('/sun');
        }
        if(localStorage.getItem("sky")=="mist" || localStorage.getItem("sky")=="fog" || localStorage.getItem("sky")=="smoke" || localStorage.getItem("sky")=="smog")
        {
          history.push('/mist');
        }
        if(localStorage.getItem("sky")=="haze")
        {
          history.push('/haze');
        }
        if(localStorage.getItem("sky")=="rain")
        {
          history.push('/rain');
        }
        if(localStorage.getItem("sky")=="snow")
        {
          history.push('/snow');
        }
        if(localStorage.getItem("sky")=="overcast clouds" || localStorage.getItem("sky")=="Clouds" || localStorage.getItem("sky")=="broken clouds") 
        {
          history.push('/clouds');
        }
        
    }
    
    // alert(windspeed);


  return (
    <>
     <br/>
      <br/>
      <br/>
    <div className="container d-flex justify-content-center">
    <br/>
      <br/>
      <br/>
        <div className="jumbotron weatherj ">
          <h3 className="d-flex justify-content-center"><u>Search weather of your City</u></h3>
          <br></br>
        <form className=""> 
      <div className="form-group d-flex justify-content-center">
        <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        type="text"
          />
          
      </div>
      <br></br>
        <input type="submit" className="btn btn-primary submit" value="Search"
          onClick={loginuser}
        />
        </form>
        


    </div>
    </div>
    </>
    );

};
export default Weather;