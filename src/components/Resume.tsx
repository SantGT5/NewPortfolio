import { MyExperience } from "./global/MyExperience"
import { NavBar } from "./global/NavBar"
import { WelcomeAboutMe } from "./global/Welcome-AboutMe"

export const Resume = () => {
  return (
    <div>
      <NavBar />
      <WelcomeAboutMe />
      <MyExperience />
    </div>
  )
}
