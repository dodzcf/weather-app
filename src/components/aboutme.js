import './aboutme.css';
import avatar from './img/img2.png';
const AboutMe= () => {
    
    


  return (
    <div className="">
        <div className="jumbotron aboutj d-flex">
         
        <div className="div1 d-flex justify-content-center">
            <img className="avatar" src={avatar}></img>
        </div>
        <br/>
        &nbsp;
        <div className="div2">
            <div className="container">
            
            <div class="p-3 mb-2 bg-da "><h2><u>Who am I?</u></h2></div>
            <br/>
            <div className="jumbotron j2">
            <p className="para">My name is <b className="bold">Dawood Zahir</b>. At the time of making this web app, I am currently doing bachelors in <b className="bold">Computer Science</b> from <b className="bold">FAST NUCES (National University of Computer and Emerging Sciences). </b>
            <br/>
            I am a full stack developer using MERN technology for making Web Applications. If you wish to have a wesbsite for yourself, buiseness (E-commerce) or a managmenet system website, or anything from your imagination, feel free to contact me on the given email ( dodxfh@gmail.com ).
            <br/>
            <br/>
            Swipe below to see my <a href="#skills">Skills</a>.
            </p>
            </div>
            </div>
        </div>


    </div>

    <div className="container skill" id="skills">
    <div class="p-3 mb-2 bg-inf "><h1><u>Skills:</u></h1></div>

    <div className="jumbotron sk">
    <h3><u>Frameworks</u></h3>
    <div class="progress">
            <div class="progress-bar w-25 progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>React Native</b></div>
        </div>

        <br/>

        <div class="progress">
            <div class="progress-bar w-50 progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>Flutter</b></div>
        </div>
        <br/>

        <div class="progress">
            <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>ReactJS</b></div>
        </div>

        <br/>

        <h3><u>Web languages:</u></h3>

        <div class="progress">
            <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>HTML</b></div>
        </div>

        <br/>

        <div class="progress">
            <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>CSS</b></div>
        </div>

        <br/>
        <h3><u>Databases:</u></h3>

        <div class="progress">
            <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>SQL</b></div>
        </div>

        <br/>

        <div class="progress">
            <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>MongoDB</b></div>
        </div>

        <br/>

        <div class="progress">
            <div class="progress-bar w-25 progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>Firebase</b></div>
        </div>

        <br/>

        <h3><u>Programming Languages:</u></h3>
        <div class="progress">
            <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>Python</b></div>
        </div>

        <br/>
        <div class="progress">
            <div class="progress-bar w-100 progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>C++</b></div>
        </div>

        <br/>
        <div class="progress">
            <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>Javascript</b></div>
        </div>

        <br/>
        <div class="progress">
            <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><b>PHP</b></div>
        </div>

        <br/>

        
    </div>
    </div>


    </div>
    
    );

};
export default AboutMe;