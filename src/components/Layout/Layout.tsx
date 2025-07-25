import type React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppChat from "../common/WhatsAppChat"

const Layout: React.FC = () => {
  const location = useLocation()

  const hideWhatsApp = location.pathname.startsWith("/admin")

  // যেসব পেইজে header/footer লুকাতে হবে
  const hideLayout = ["/login", "/register"].some(path =>
    location.pathname.startsWith(path)
  ) || location.pathname.startsWith("/services/")

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
             {!hideWhatsApp && <WhatsAppChat />} 

    </div>
  )
}

export default Layout
