import type React from "react"
import ScrollToTop from "../../components/ScrollToTop"
import ContactForm from "../../components/contact/contactform"

const Contact: React.FC = () => {
  return (
    <div className="section-padding bg-[#06140b]">
      <ScrollToTop/>
      <div className="container">
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
