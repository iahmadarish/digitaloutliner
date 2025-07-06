import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import logo from "@/assets/logo.png"
import { Link } from "react-router-dom"

const HexaCodeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navigation = [
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [lastScrollY, isMenuOpen])

  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // ✅ Type-safe string
      stiffness: 100,
    },
  },
}

const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  closed: {
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
}

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav className=" mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
          
          <div className="flex items-center">
              <img src={logo} className="h-12" alt="" />
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 text-sm font-medium tracking-wider hover:opacity-80 ${
                  scrolled ? "text-white" : "text-white/90"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden z-50" whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? "text-white hover:text-white/80" : "text-white hover:text-white/80"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay to prevent background scrolling */}
              <div className="md:hidden fixed inset-0 bg-black/95 z-40 overflow-hidden" />
              <motion.div
                className="md:hidden fixed inset-0 bg-black/95 z-40 overflow-y-auto"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
              >
              <div className="flex bg-black/90 justify-between items-center px-4 py-4 border-b border-white/20">
                <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
          
          <div className="flex items-center">
              <img src={logo} className="h-12" alt="" />
          </div>
          </Link>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-white/80 p-2 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <motion.div
                className="flex flex-col space-y-4 pt-8 px-4 text-white"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={itemVariants} whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={item.href}
                      className="block text-xl font-medium transition-all duration-200 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact info in mobile menu */}
              <motion.div
                className="mt-12 pt-6 border-t border-white/20 text-white/80 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="h-5 w-5" />
                  <span>+88 01819454892</span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="h-5 w-5" />
                  <span>admin@digitaloutliner.com</span>
                </div>
                <div>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default HexaCodeNavbar