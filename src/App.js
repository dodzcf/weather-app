import './App.css';
import Navbar from './components/nav.js';
import Weather from './components/weather'
import Sun from './city/sun.js';
import Haze from './city/haze.js';
import Rain from './city/rain.js';
import Mist from './city/mist.js';
import Snow from './city/snow.js';
import Clouds from './city/clouds.js';
import AboutMe from './components/aboutme';
import WebInfo from './components/webinfo';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function App() {
  localStorage.setItem('token',0);

  return (
    
    <Router>
      <Navbar/>
      <Route exact path="/">
      <Weather/>
      </Route>
      <Route exact path="/sun">
        <Sun/>
      </Route>
      <Route exact path="/haze">
        <Haze/>
      </Route>
      <Route exact path="/rain">
        <Rain/>
      </Route>
      <Route exact path="/mist">
        <Mist/>
      </Route>
      <Route exact path="/snow">
        <Snow/>
      </Route>
      <Route exact path="/clouds">
        <Clouds/>
      </Route>
      <Route exact path="/aboutme">
        <AboutMe/>
      </Route>
      <Route exact path="/webinfo">
        <WebInfo/>
      </Route>
    </Router>
    
  );
}

export default App;
