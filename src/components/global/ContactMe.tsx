import React from "react"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"

type contactMe = {
  user_name: string
  user_email: string
  subject: string
  message: string
}

export const ContactMe = () => {
  const [btnDisabled, setBtnDisabled] = React.useState({
    disabledBTN: false,
    desBTN: "SEND MESSAGE",
  })
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

    setBtnDisabled({ disabledBTN: true, desBTN: "SEND MESSAGE" })
    if (
      status.message === "" ||
      status.subject === "" ||
      status.user_name === ""
    ) {
      toast.info("All fields is required.", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setBtnDisabled({ disabledBTN: false, desBTN: "SEND MESSAGE" })
    } else if (
      !status.user_email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)
    ) {
      toast.error("Please, enter a valid email.", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setBtnDisabled({ disabledBTN: false, desBTN: "SEND MESSAGE" })
    } else {
      emailjs
        .send(
          "service_ctj6djs",
          "template_zqws0xe",
          status,
          "user_4mvhXE3O4V8snsGOqObLm"
        )
        .then(
          (response) => {
            toast.success(
              "🚀 Wow thank you! Your email has been sent to Gian Lucas!😁",
              {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
              }
            )
            setBtnDisabled({ disabledBTN: true, desBTN: "MESSAGE SENT" })
          },
          (error) => {
            toast.error("😢 Sorry, Something Unexpected Happened 😢", {
              position: "top-right",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 0,
            })
          }
        )
    }
  }

  async function handleCopy() {
    toast.success("Email copied!😁", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    })
    return await navigator.clipboard.writeText("gianspf@gmail.com")
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer theme="colored" limit={3} autoClose={5000} />
      <div className="container">
        <h4 className="sub-title" id="subTitleID">CONTACT ME</h4>
        <h1 className="title">JUST SAY HELLO</h1>
        <div className="center">
          <div className="flex-name-email">
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
              type="email"
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
            rows={20}
            required={true}
            name="message"
            value={status.message}
            onChange={handleChange}
            className="input-contact textarea-subject"
            placeholder="Your message"
          />
        </div>
        <div className="center">
          <button
            type="submit"
            className="btn-style"
            disabled={btnDisabled.disabledBTN}
            style={
              btnDisabled.disabledBTN === true
                ? { color: "#666666", backgroundColor: "#cccccc" }
                : {}
            }
            onClick={handleSubmit}
          >
            {btnDisabled.desBTN}
          </button>
        </div>
        <span className="center copy-style">Or click to copy</span>
        <div className="center">
          <button type="button" className="btn-style" onClick={handleCopy}>
            gianspf@gmail.com
          </button>
        </div>
      </div>
    </form>
  )
}
