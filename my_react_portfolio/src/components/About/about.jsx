import Profile from '../assets/profile.jpg'

function AboutMe() {
    return (
    <div className="container">
        <h2 className="title"><a id="About-Me-Path">About Me</a></h2>
        <article id="aboutmepage">
          <figure className="div">
            <img className="leftFigure" id="profile" src={Profile} alt="Profile Image" />
          </figure>
        </article>
    </div>
    );
  }
  
  export default AboutMe;