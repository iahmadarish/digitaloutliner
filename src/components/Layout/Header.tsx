import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import logo from "@/assets/logo/Group 61 (1).png"

const CONQUERICNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  const navigation = [
    { name: "Our Service", href: "/services" },
    { name: " Solutions", href: "/solutions" },
    { name: "Human Resources", href: "/business-solutions" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Company", href: "/about" },
  ]

  // Get active item based on current route
  const getActiveItem = () => {
    const currentPath = location.pathname
    const activeNav = navigation.find(item => item.href === currentPath)
    return activeNav ? activeNav.name : ""
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = "unset"
    }
  }, [lastScrollY, isMenuOpen])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const activeItem = getActiveItem()

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#06140b] backdrop-blur-md shadow-lg" : "bg-transparent backdrop-blur-sm"
          }`}
        style={{
          transform: `translateY(${visible ? 0 : -100}px)`,
          transition: "transform 0.3s ease-in-out"
        }}
      >
        <div className="border-b border-cyan-400/30">
          <nav className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 lg:py-4">
            <div className="flex justify-between items-center">
              {/* Logo - Left Side */}
              <div className="flex items-center">
                <Link to="/" className="block">
                  <img
                    src={logo}
                    className="h-8 sm:h-10 lg:h-8 xl:h-12 w-auto"
                    alt="conqueric Logo"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 lg:space-x-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors duration-200 text-base md:xl:2xl:lg:text-sm uppercase font-josefin font-medium ${activeItem === item.name
                        ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                        : "text-white/90 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Contact Us Button - Right Side */}
              <div className="flex items-center">
                <button className="hidden lg:block px-4 py-2 border border-blue-500 rounded-md text-white text-sm lg:text-base font-medium hover:bg-white/10 transition-colors duration-200">
                  Contact Us
                </button>
                
                {/* Mobile menu button */}
                <div className="lg:hidden z-50 ml-4">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full transition-colors hover:bg-white/10"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? (
                      <X className="h-6 w-6 text-white" />
                    ) : (
                      <Menu className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#06140b]/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`absolute top-0 right-0 h-full w-full max-w-[100%] bg-[#06140b] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-cyan-400/30">
              <img
                src={logo}
                className="h-10"
                alt="CONQUERIC Logo"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white bg-blue-600 transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 " />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="px-6 py-6 h-full overflow-y-auto font-nunito">
              {/* Navigation Links */}
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <div
                    key={item.name}
                    className="opacity-0  translate-x-4 animate-slideIn"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards"
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`block px-4 py-2 rounded-lg  text-lg font-medium transition-all duration-200 ${activeItem === item.name
                          ? "bg-cyan-400/20  text-cyan-400 border-l-4 border-cyan-400 shadow-lg"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      <div className="flex items-center gap-x-2">
                        {item.name}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Contact Us Button */}
              <div
                className="sm:mt-8 mt-2 opacity-0 translate-x-4 animate-slideIn"
                style={{
                  animationDelay: "400ms",
                  animationFillMode: "forwards"
                }}
              >
                <button className="w-full px-6 py-2 border border-cyan-400 rounded-lg text-cyan-400 text-lg font-medium hover:bg-cyan-400/10 transition-colors duration-200">
                  Contact Us
                </button>
              </div>

              {/* Contact Info */}
              <div
                className="mt-8 pt-6 border-t border-cyan-400/30 space-y-3 opacity-0 translate-x-4 animate-slideIn"
                style={{
                  animationDelay: "500ms",
                  animationFillMode: "forwards"
                }}
              >
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">+880 1568202839</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">info@conqueric.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">We are available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style >{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default CONQUERICNavbar