import "./styles.sass";
import img from "./img.png";
import logo from "./logo.svg"

export const App = () => {
  return (
    <div>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={img} alt="Logo" />
      <img src={logo} alt="Logo" />
    </div>
  );
};
