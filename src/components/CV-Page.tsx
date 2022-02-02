import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import myCV from "../assets/GianLucas - CV.pdf";

export const CvPage = () => {
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  function onResumeClick() {
    window.open("https://drive.google.com/file/d/1j68w-7KSxpaGjltH4rLyuOeYoedoplnC/view?usp=sharing");
  }

  return (
    <div className="container">
      <IoArrowBack onClick={handleBackPage} className="arrow-btn" />
      <h1 className="title title-resume">My Resume</h1>
      {/* <embed src={myCV} width="800px" height="2100px" /> */}
      <button onClick={onResumeClick}>button</button>
    </div>
  )
}
