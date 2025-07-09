import type React from "react"
import ScrollToTop from "../../components/ScrollToTop"
import ContactForm from "../../components/contact/contactform"

const Contact: React.FC = () => {
  return (
    <div className="section-padding bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19]">
      <ScrollToTop/>
      <div className="container">
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
