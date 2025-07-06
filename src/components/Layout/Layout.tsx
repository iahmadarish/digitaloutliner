import type React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout: React.FC = () => {
  const location = useLocation()

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
    </div>
  )
}

export default Layout
