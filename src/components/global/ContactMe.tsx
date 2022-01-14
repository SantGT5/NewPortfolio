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
    console.log("dentro do submit")

    toast.update("Upload in Progress", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: 1,
    })

    toast.success(
              "🚀 Wow so easy! Your e-mail has been set to Gian Liucas!😁",
              {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
              }
            )

    // emailjs
    //   .send(
    //     "service_ctj6djs",
    //     "template_zqws0xe",
    //     status,
    //     "user_4mvhXE3O4V"
    //   )
    //   .then(
    //     (response) => {
    //       toast.success(
    //         "🚀 Wow so easy! Your e-mail has been set to Gian Liucas!😁",
    //         {
    //           position: "top-right",
    //           autoClose: 4000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: 0,
    //         }
    //       )
    //     },
    //     (error) => {
    //       toast.error("😢 Sorry, Something Unexpected Happened 😢", {
    //         position: "top-right",
    //         autoClose: 4000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: 0,
    //       })
    //     }
    //   )
  }

  async function handleCopy() {
    return await navigator.clipboard.writeText("gianspf@gmail.com")
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer theme="colored" limit={3} autoClose={5000} />
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
