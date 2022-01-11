import { BsDot } from "react-icons/bs"

export const MyExperience = () => {
  return (
    <div className="container">
      <h4 className="sub-title">QUALIFICATION</h4>
      <h1 className="title">My Experience</h1>
      <div className="experience-container flex">
        <span className="date">2019 - 2021</span>
        <BsDot className="icon-dot" />
        <span>BBVA Bank</span>
      </div>
    </div>
  )
}
