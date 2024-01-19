import Profile from '../../assets/profile.jpg';

function AboutMe() {
    return (
    <div className="container">
        <h2 className="title"><a id="About-Me-Path">About Me: I delved into coding through the Columbia Engineering Coding Bootcamp, refining my skills in diverse programming languages. This immersive experience, guided by industry experts, equipped me with both technical proficiency and a collaborative mindset. Now, I'm poised to contribute effectively in the dynamic field of technology.</a></h2>
        <article id="aboutmepage">
          <figure className="div">
            <img className="leftFigure" id="profile" src={Profile} alt="Profile Image" />
          </figure>
        </article>
    </div>
    );
  }
  
  export default AboutMe;