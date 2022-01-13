export const ContactMe = () => {
  return (
    <div className="container">
      <h4 className="sub-title">CONTACT ME</h4>
      <h1 className="title">JUST SAY HELLO</h1>
      <div className="center">
        <div className="flex">
          <input
            className="input-contact input-name"
            type="text"
            placeholder="Enter your name"
          />

          <input
            className="input-contact input-email"
            type="text"
            placeholder="Enter your e-mail"
          />
        </div>
        <input
          className="input-contact input-subject"
          type="email"
          placeholder="Your Subject"
        />
        <textarea
          rows={25}
          className="input-contact textarea-subject"
          placeholder="Your message"
        ></textarea>
      </div>
      <div className="center">
        <button type="button" className="btn-style">
          SEND MESSAGE
        </button>
      </div>
      <span className="center copy-style">Or copy</span>
      <div className="center">
        <button type="button" className="btn-style">
          gianspf@gmail.com
        </button>
      </div>
    </div>
  )
}
