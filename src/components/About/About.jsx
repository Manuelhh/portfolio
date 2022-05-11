import "./About.css";
import AboutMe from "../../img/about.jpg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLeftContainer">
        <div className="aboutCard bg"></div>
        <div className="aboutCard">
          <img className="aboutImage" src={AboutMe} alt="" />
        </div>
      </div>
      <div className="aboutRightContainer">
        <h1 className="aboutTitle">About Me</h1>
        <p className="aboutSub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="aboutDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="aboutAward">
          <img src={Award} alt="" className="aboutAwardImg" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Computer Software Engineering</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
