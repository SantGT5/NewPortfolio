import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si"

export const SocialMedia = () => {
  return (
    <div className="container bg-color">
      <h4 className="sub-title">FOLLOW ME</h4>
      <h1 className="title">LEST’S GET SOCIAL</h1>
      <div className="flex icons-social-container">
        <SiGithub className="icons-social" />
        <SiLinkedin className="icons-social" />
        <SiInstagram className="icons-social" />
      </div>
    </div>
  )
}
