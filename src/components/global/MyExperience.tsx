import { BsDot } from "react-icons/bs"

export const MyExperience = () => {
  const objExpe = [
    {
      date: "2019 - 2021",
      subtitle: "BBVA Bank",
      title: "Web Developer",
      description: [
        "Internal Web page maintenance Responsible",
        "DataBase maintenance and technical documents",
        "BitBucket repository management",
        "Deploy responsible",
      ],
    },
    {
      date: "2017 - 2019",
      subtitle: "Allianz",
      title: "Technician level II",
      description: [
        "Technical support client",
        "Cisco IOS system solutions",
        "Networks, Vlans and servers maintenance",
      ],
    },
  ]

  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-duration="2000">
      <h4 className="sub-title">QUALIFICATION</h4>
      <h1 className="title">MY EXPERIENCE</h1>
      </div>
      {objExpe.map((elem, i) => {
        return (
          <div data-aos="fade-right" data-aos-duration="2000">
          <div key={i} className="flex-experience">
            <div className="flex">
              <BsDot className="icon-dot-response" />
              <span className="date">{elem.date}</span>
              <BsDot className="icon-dot" />
            </div>
            <div className="expe-description">
              <h4 className="expe-sub-title">{elem.subtitle}</h4>
              <h4 className="expe-title">{elem.title}</h4>
              <ol className="expe-list">
                {elem.description.map((elem, i) => {
                  return <li key={i}>{elem}</li>
                })}
              </ol>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
