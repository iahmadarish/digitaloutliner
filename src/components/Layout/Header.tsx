"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { Link } from "react-router-dom"
import logo from "@/assets/logour.png"
const URSOFTSNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navigation = [
    { name: "Service", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Company", href: "/about" },
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
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = "unset"
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
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 font-family-mont transition-all duration-300 ${scrolled ? "bg-black backdrop-blur-sm shadow-lg" : "bg-transparent backdrop-blur-sm"
        }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Header Row */}
      <div className="border-b border-cyan-400/30">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4">
          <div className="flex justify-between items-center">
            {/* Contact Us Button - Left Side */}
            <div className="flex items-center">
              <button className="px-4 py-2 border border-white/30 rounded-md text-white text-sm font-medium hover:bg-white/10 transition-colors md:lg:xl:2xl:block hidden duration-200">
                Contact Us
              </button>
            </div>

            {/* URSOFTS Logo - Center */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <img src={logo} className="h-14" alt="URSOFTS Logo" />
            </Link>

            {/* Contact Email - Right Side */}
            <div className="hidden md:flex items-center">
              <span className="text-white/80 text-sm font-medium">info@ursoft.com</span>
            </div>

            {/* Mobile menu button */}
            <motion.div className="md:hidden z-50" whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full transition-colors  hover:text-blue-400"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-8 w-8 rounded-full p-2 text-black bg-white" /> : <Menu className="h-8 w-8 text-white" />}
              </button>
            </motion.div>
          </div>
        </nav>
      </div>

      {/* Navigation Row - Desktop Only */}
      <div className="hidden md:block border-b border-cyan-400/30">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-8 lg:space-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm lg:text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            {/* Mobile Menu Header */}
            <div className="flex bg-black/90 justify-between items-center px-4 py-4 border-b border-cyan-400/30">
              <img src={logo} className="h-14" alt="URSOFTS Logo" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white h-6 w-6 bg-  hover:text-white/80 p-2 rounded-full transition-colors"
                aria-label="Close menu"
              >
                {/* <X className="h-6 w-6" /> */}
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 py-">
              <motion.div
                className="flex flex-col bg-black h-screen space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <a
                      href={item.href}
                      className="block  font-medium hover:bg-blue-400 rounded-lg hover:text-black text-white/90 text-center text-2xl py-4 white transition-colors duration-200 my-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}

                {/* Contact Us button in mobile menu */}
                <motion.div variants={itemVariants} className="pt-4">
                  <button className="w-full px-4 py-3 border border-white/30 rounded-md text-white text-lg font-medium hover:bg-white/10 transition-colors duration-200">
                    Contact Us
                  </button>
                </motion.div>
              </motion.div>

              {/* Contact info in mobile menu */}
              <motion.div
                className=" pt-6 border-t border-cyan-400/30 text-white/80"
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
                  <span>info@ursoft.com</span>
                </div>
                <div>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default URSOFTSNavbar
