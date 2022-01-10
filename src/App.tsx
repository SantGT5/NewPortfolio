// Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Style components
import "./styles.sass"

// Pages components
import { Home } from "./components/Home"
import { Resume } from "./components/Resume"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}
