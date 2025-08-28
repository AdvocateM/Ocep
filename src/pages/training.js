import React from "react"
import * as Icon from "react-feather"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"

const ComingSoon = () => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const commingSoonTime = () => {
    let endTime = new Date("October 17, 2025 15:00:00 PDT")
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < "10") {
      hours = "0" + hours
    }
    if (minutes < "10") {
      minutes = "0" + minutes
    }
    if (seconds < "10") {
      seconds = "0" + seconds
    }
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  return (
    <Layout>
      <SEO title="Traning Page" />

      <Navbar />

      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>Training Program Coming Soon</h1>
                <p>
                  We’re currently working towards obtaining accreditation from
                  the relevant authority to provide certified artisan training.
                </p>
                <p>
                  Our goal is to deliver high-quality, industry-approved
                  programs that empower individuals with practical,
                  safety-focused engineering skills.
                </p>
                <p>
                  Thank you for your interest and patience — updates will be
                  available here soon.
                </p>
                <p>
                  Drop your email below and we’ll notify you as soon as we’re
                  fully accredited and ready to welcome our first cohort of
                  trainees.
                </p>

                <form>
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Enter email address"
                    name="email"
                    required
                  />

                  <button type="submit" className="submit-btn">
                    Notify Me
                  </button>
                </form>

                <div id="timer">
                  <div id="days">
                    {days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {seconds} <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="social-list">
          <li className="list-heading">Follow us for update:</li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Icon.Facebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              className="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Icon.Twitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <Icon.Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Icon.Instagram />
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </Layout>
  )
}

export default ComingSoon
