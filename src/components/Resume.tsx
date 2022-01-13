import { ContactMe } from "./global/ContactMe"
import { MyExperience } from "./global/MyExperience"
import { NavBar } from "./global/NavBar"
import { Skills } from "./global/Skills"
import { SocialMedia } from "./global/SocialMedia"
import { WelcomeAboutMe } from "./global/Welcome-AboutMe"

export const Resume = () => {
  return (
    <div>
      <NavBar />
      <WelcomeAboutMe />
      <MyExperience />
      <Skills />
      <ContactMe />
      <SocialMedia />
    </div>
  )
}
