import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#000] font-family-comfort  text-white py-8 sm:py-12">
      <div className="mx-auto container py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-condition" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm sm:text-base">We are working online only</p>
              <p className="text-sm sm:text-base">We don't have office now</p>
              <p className="text-sm sm:text-base break-all">weareconqueric@gmail.com</p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4">
                <a href="#" className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Opening</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium text-sm sm:text-base">Saturday-Thursday</p>
                <p className="text-sm sm:text-base">24/7</p>
              </div>
              <div className="mt-3">
                <p className="font-medium text-sm sm:text-base">Friday</p>
                <p className="text-sm sm:text-base">8PM - 11PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-orange-400 text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Submit email to get updated our all excellence news and offer!
            </p>
            
            {/* Desktop Newsletter Form */}
            <div className="hidden sm:flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-l-md focus:outline-none focus:border-orange-400 text-sm min-w-0"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-r-md font-semibold transition-colors text-sm whitespace-nowrap">
                SIGNUP
              </button>
            </div>
            
            {/* Mobile Newsletter Form */}
            <div className="sm:hidden space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-400 text-sm"
              />
              <button className="w-full bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-semibold transition-colors text-sm">
                SIGNUP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © CONQUERIC, All Right Reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <a href="/" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Home</a>
              <a href="contact" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Help</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}