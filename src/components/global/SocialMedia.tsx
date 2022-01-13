import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"

export const SocialMedia = () => {
  return (
    <div className="container bg-color">
      <h4 className="sub-title">FOLLOW ME</h4>
      <h1 className="title">LEST’S GET SOCIAL</h1>
      <div className="flex icons-social-container">
        <a rel="noreferrer" href="https://github.com/SantGT5" target="_blank">
          <SiGithub className="icons-social" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/gian-lucas/"
          target="_blank"
        >
          <SiLinkedin className="icons-social" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/giaanlucas_/"
          target="_blank"
        >
          <SiInstagram className="icons-social" />
        </a>
      </div>
    </div>
  )
}
