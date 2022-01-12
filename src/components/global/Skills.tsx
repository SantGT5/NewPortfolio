import Marquee from "react-fast-marquee"

import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiNpm,
  SiYarn,
  SiCss3,
  SiSass,
  SiHtml5,
  SiRedux,
  SiJest,
  SiWebpack,
  SiFigma,
  SiMongodb,
  SiJson,
} from "react-icons/si"

export const Skills = () => {
  const icons = [
    { icon: SiReact, des: "React" },
    { icon: SiNodedotjs, des: "NodeJS" },
    { icon: SiTypescript, des: "TypeScript" },
    { icon: SiJavascript, des: "JavaScript" },
    { icon: SiNpm, des: "NPM" },
    { icon: SiYarn, des: "Yarn" },
    { icon: SiCss3, des: "CSS" },
    { icon: SiSass, des: "SASS" },
    { icon: SiHtml5, des: "HTML" },
    { icon: SiRedux, des: "Redux" },
    { icon: SiJest, des: "Jest" },
    { icon: SiWebpack, des: "WebPack" },
    { icon: SiFigma, des: "Figma" },
    { icon: SiMongodb, des: "MongoDB" },
    { icon: SiJson, des: "Json" },
  ]

  return (
    <div className="bg-color container">
      <h4 className="sub-title">APORTS</h4>
      <h1 className="title">MY SKILL</h1>
      <div className="flex">
        <Marquee speed={40} gradientColor={[248, 248, 248]}>
          {icons.map((Icons, i) => {
            return (
              <div key={i} className="icons-container">
                <div className="center">
                  <Icons.icon className="skill-icons" />
                </div>
                <p className="center skill-des">{Icons.des}</p>
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}
