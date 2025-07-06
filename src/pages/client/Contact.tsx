import type React from "react"
import ScrollToTop from "../../components/ScrollToTop"
import ContactForm from "../../components/contact/contactform"

const Contact: React.FC = () => {
  return (
    <div className="section-padding bg-gradient-to-tr from-gray-900 via-black to-gray-900">
      <ScrollToTop/>
      <div className="container">
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
