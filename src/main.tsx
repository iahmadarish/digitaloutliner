import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import './i18n'
import { HelmetProvider } from "react-helmet-async"   // 👈 import করতে হবে

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>   {/* 👈 এখানে wrap করতে হবে */}
      <div className="bg-[#06140b] over">
        <App />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
