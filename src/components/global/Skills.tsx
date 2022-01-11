import { SiReact } from "react-icons/si"

export const Skills = () => {
  return (
    <div className="bg-color container">
      <h4 className="sub-title">APORTS</h4>
      <h1 className="title">MY SKILL</h1>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        <div
          style={{
            backgroundColor: "red",
            maxWidth: "120px",
          }}
        >
          <SiReact size={120} color="#80888F" />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            React
          </p>
        </div>
      </div>
    </div>
  )
}
