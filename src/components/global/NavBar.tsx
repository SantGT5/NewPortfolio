import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="bg-color flex title-logo container">
      <h1>
        AP<span className="red-color">O</span>RTS.
      </h1>
      <div className="flex flex-end">
        <a href="#subTitleID" className="btn-contact">
        Get in touch
        </a>
        <Link to={"/my-resume"}>
          <span>Resume</span>
        </Link>
      </div>
    </nav>
  )
}
