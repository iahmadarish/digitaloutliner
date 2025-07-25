import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import './i18n'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-gradient-to-tr from-[#0b0f19] via-[#111827] to-[#0b0f19] over">
    <App />
    </div>
  </React.StrictMode>,
)
