import './webinfo.css';
import react from './img/react.gif';
import weath from './img/weather.gif';
const WebInfo= () => {
    
    


  return (
    <div className="">
        <br/>
        <br/>
       <h1 className="d-flex justify-content-center"><div class="p-3 mb-2 bgin">How this Website is made?</div></h1>
        <br/>
        <br/>
        <div className="container d-flex justify-content-center">
        <div class="card-deck ">
        <div class="card abc">
            <div class="card-body text-center">
                <img className="reactt" src={react}/>
                <br/>
                <br/>
                {/* <br/> */}
                <h3 className="head"><b>ReactJS</b></h3>
                <br/>
                {/* <br/> */}
                <p class="card-text">This Web-app is made using ReactJS.</p>
                <p>This Web-App consists of three pages.</p>
                {/* <ul> */}
                    <li><b className="boldd">About Me</b> page has information about the creator of this web-app</li>
                    <br/>
                    <li><b className="boldd">Home</b> page has an input form which will tell you the weather when you click Submit after typing City.</li>
                    <br/>
                    <li><b className="boldd">About Website</b> page has information about what components are used in this website. </li>
                {/* </ul> */}
        </div>
        </div>
        <div class="card abc">
            <div class="card-body text-center">
                <img className="weath" src={weath}/>
                <br/>
                <br/>
                <h3 className="head"><b>Open Weather</b></h3>
                <br/>
                <p class="card-text">This Web-App is using <b className="boldd">Open Weather</b>'s API. The city is sent to the Open Weather using API and the the API return the JSON document containing information about that city. </p>
        </div>
        </div>
        
        </div>
        </div>

    </div>
    
    );

};
export default WebInfo;