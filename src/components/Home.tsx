import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="center-page">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1 className="title-home">HELLO, I AM GIAN LUCAS</h1>
        <h4 className="sub-title-home">I am an web developer</h4>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000">
        <Link to="/portfolio">
          <button>SEE MY PORTFOLIO</button>
        </Link>
      </div>
    </div>
  )
}
