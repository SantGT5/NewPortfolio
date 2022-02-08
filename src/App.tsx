// Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Style components
import "react-toastify/dist/ReactToastify.css"
import "./styles.sass"

// Pages components
import { Home } from "./components/Home"
import { Resume } from "./components/Resume"
import { CvPage } from "./components/CV-Page"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Resume />} />
        <Route path="/my-resume" element={ <CvPage /> }/>
        <Route path='*' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}
