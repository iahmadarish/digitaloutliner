import type React from "react"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import logo from "@/assets/logo2.png"
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-family-small">
      <div className="px-18 py-16">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Leading construction and engineering firm providing innovative solutions for infrastructure development
              and supply chain management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  Web Design and Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  Graphics Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  2D/3D design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm">
                    House# 970, East Shewrapara, Mirpur,
                    <br />
                    Dhaka-1216 Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <p className="text-white text-sm">+880 1918-111011</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <p className="text-white text-sm">admin@digitaloutliner.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-800 text-sm">© 2025 Digital Outliner. All rights reserved. Development by Digital Outliner</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-900 hover:text-blue-800 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-800 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-800 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
