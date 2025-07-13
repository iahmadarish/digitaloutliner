import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./hooks/useAuth"
import Layout from "./components/Layout/Layout"
import AdminLayout from "./components/Layout/AdminLayout"
import Home from "./pages/client/Home"
import About from "./pages/client/About"
import Services from "./pages/client/Services"
import ServiceDetail from "./pages/client/ServiceDetail"
// import Projects from "./pages/Projects"
import Blog from "./pages/client/Blog"
import Contact from "./pages/client/Contact"

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminServices from "./pages/admin/AdminServices"
import AdminProjects from "./pages/admin/AdminProjects"
import ServiceForm from "./pages/admin/ServiceForm"
import ProjectForm from "./pages/admin/ProjectForm"
import Projects from "./pages/client/Projects"
import BlogDetails from "./pages/client/BlogDetails"
import Privacy from "./pages/client/Privacy"
import TermsAndCondition from "./pages/client/TermsAndCondition"
import ProjectDetails from "./pages/client/ProjectDetails"
import Solutions from "./pages/client/Solutions"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="terms-condition" element={<TermsAndCondition />} />
            <Route path="solutions" element={<Solutions />} />
          </Route>

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="services/new" element={<ServiceForm />} />
            <Route path="services/edit/:id" element={<ServiceForm />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="projects/new" element={<ProjectForm />} />
            <Route path="projects/edit/:id" element={<ProjectForm />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
