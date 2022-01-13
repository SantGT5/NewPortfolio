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
            <a
              rel="noreferrer"
              href="https://github.com/SantGT5"
              target="_blank"
            >
              <SiGithub className="icon-github" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/gian-lucas/"
              target="_blank"
            >
              <SiLinkedin className="icon-linkedin" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/giaanlucas_/"
              target="_blank"
            >
              <SiInstagram className="icon-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
