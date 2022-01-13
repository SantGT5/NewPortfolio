import React from "react"
import emailjs from "emailjs-com"

type contactMe = {
  user_name: string
  user_email: string
  subject: string
  message: string
}

export const ContactMe = () => {
  const [status, setStatus] = React.useState<contactMe>({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStatus({ ...status, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_ctj6djs",
        "template_zqws0xe",
        status,
        "user_4mvhXE3O4V8snsGOqObLm"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response)
        },
        (error) => {
          console.log("FAILED...", error)
        }
      )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h4 className="sub-title">CONTACT ME</h4>
        <h1 className="title">JUST SAY HELLO</h1>
        <div className="center">
          <div className="flex">
            <input
              className="input-contact input-name"
              required={true}
              type="text"
              name="user_name"
              value={status.user_name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <input
              className="input-contact input-email"
              required={true}
              type="text"
              name="user_email"
              value={status.user_email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
            />
          </div>
          <input
            className="input-contact input-subject"
            required={true}
            type="text"
            name="subject"
            value={status.subject}
            onChange={handleChange}
            placeholder="Your Subject"
          />
          <textarea
            rows={25}
            required={true}
            name="message"
            value={status.message}
            onChange={handleChange}
            className="input-contact textarea-subject"
            placeholder="Your message"
          />
        </div>
        <div className="center">
          <button type="submit" className="btn-style" onClick={handleSubmit}>
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
    </form>
  )
}
