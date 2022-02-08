import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"

export const SocialMedia = () => {
  return (
    <div className="container bg-color">
      <div data-aos="fade-up" data-aos-duration="2000">
      <h4 className="sub-title">FOLLOW ME</h4>
      <h1 className="title">LEST’S GET SOCIAL</h1>
      </div>
      <div className="flex space-evenly">
      <div data-aos="fade-up" data-aos-duration="3000">
        <a rel="noreferrer" href="https://github.com/SantGT5" target="_blank">
          <SiGithub className="icons-social" />
        </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/gian-lucas/"
          target="_blank"
        >
          <SiLinkedin className="icons-social" />
        </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
        <a
          rel="noreferrer"
          href="https://www.instagram.com/giaanlucas_/"
          target="_blank"
        >
          <SiInstagram className="icons-social" />
        </a>
        </div>
      </div>
    </div>
  )
}
