import { IoArrowBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export const CvPage = () => {
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  function handleSpanishResume() {
    window.open(
      "https://drive.google.com/file/d/1j68w-7KSxpaGjltH4rLyuOeYoedoplnC/view?usp=sharing"
    )
  }

  function handleEnglishResume() {
    window.open(
      "https://drive.google.com/file/d/1LYzEHyxVpsFbDUNMK6gKaMetrqvGa8Y7/view?usp=sharing"
    )
  }

  return (
    <div className="container">
      <IoArrowBack onClick={handleBackPage} className="arrow-btn" />
      <h1 className="title title-resume">My Resume</h1>
      <div className="flex space-evenly flex-btn-resume">
        <button
          className="resume-btn bg-red-color white-color"
          onClick={handleEnglishResume}
        >
          English resume
        </button>
        <button
          className="resume-btn bg-red-color white-color"
          onClick={handleSpanishResume}
        >
          Spanish resume
        </button>
      </div>
    </div>
  )
}
