import "./styles.sass"
import img from "./img.png"
import logo from "./logo.svg"
import { ClickCounter } from "./ClickCounter"

export const App = () => {
  return (
    <div>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <img src={img} alt="Logo" />
      <img src={logo} alt="Logo" />
      <ClickCounter />
    </div>
  )
}
