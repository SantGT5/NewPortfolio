import { MyExperience } from "./global/MyExperience"
import { NavBar } from "./global/NavBar"
import { Skills } from "./global/Skills"
import { WelcomeAboutMe } from "./global/Welcome-AboutMe"

export const Resume = () => {
  return (
    <div>
      <NavBar />
      <WelcomeAboutMe />
      <MyExperience />
      <Skills />
    </div>
  )
}
