import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"

export const WelcomeAboutMe = () => {
  return (
    <div className="container bg-color">
      <div className="center">
        <h1 className="welcome">
          Welcome<span className="red-color">.</span>
        </h1>
      </div>
      <div className="flex">
        <div className="about-me-container bg-red-color white-color">
          <span className="about-me">ABOUT ME</span>
        </div>
        <div className="about-text-container">
          <span className="about-text">
            I am Web Developer based in Madrid - Spain. Passionate to code, and
            always looking for challenges. As a developer, I am always learning,
            and never bored.
          </span>
          <div className="icons-welcome">
            <SiGithub className="icon-github" />
            <SiLinkedin className="icon-linkedin" />
            <SiInstagram className="icon-instagram" />
          </div>
        </div>
      </div>
    </div>
  )
}
