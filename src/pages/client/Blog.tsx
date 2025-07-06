import type React from "react"
import ScrollToTop from "../../components/ScrollToTop"

const Blog: React.FC = () => {
  return (
    <div className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ScrollToTop/>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-200 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest insights, news, and updates from the construction industry.
          </p>
        </div>

        <div className=" rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Latest Articles</h2>
          <p className="text-gray-200 leading-relaxed">
            This is the Blog page. Here will be add our blog posts, articles, industry news, and company updates here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
