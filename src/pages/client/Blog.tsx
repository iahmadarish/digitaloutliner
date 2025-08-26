import { Link } from "react-router-dom";
import { blogs } from "../../data/blogData";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import BlogIcon from "../../components/blog/BlogIcon";

const Blog = () => {
  // Get featured post (first blog) and regular posts
  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);

  return (
    <div className="bg-[#06140b]  pt-40 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#]  md:lg:xl:2xl:sm:py-20 py-10  px-4 sm:px-6 lg:px-8 text-white">
        <div className=" space-y-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <div className="">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-family-comfort"> Insights & Updates</h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90 font-family-mont">
              The latest trends, strategies, and innovations in digital technology
            </p>
          </div>

          <img src="/logo/logo.png" className="text-center mx-auto" alt="" />
        </div>
      </div>

      {/* Featured Post */}
      <div className=" mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 font-family-comfort">
        <h2 className="text-5xl font-bold text-[#c4eb1b] mb-8 font-family-comfort ">Featured Post</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <Link to={`/blog/${featuredPost.id}`} className="block">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={featuredPost.images[0]}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-blog.jpg";
                  }}
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <BlogIcon name={featuredPost.iconName} className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium text-blue-600">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="md:lg:xl:2xl:sm:text-2xl text-xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="space-y-4 ">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <div className="text-blue-600 flex items-center font-medium">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Regular Posts Grid */}
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
        <h2 className="text-5xl font-bold mb-8 text-[#acff2f] font-family-comfort">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-family-comfort">
          {regularPosts.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <div className="h-48">
                  <img
                    src={blog.images[0]}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-blog.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <BlogIcon name={blog.iconName} className="w-4 h-4 mr-2" />
                    <span className="text-xs font-medium text-blue-600">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {blog.readTime}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-[#000dff] py-16 px-4 sm:px-6 lg:px-8 font-family-comfort">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Stay Updated</h2>
          <p className="text-gray-100 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;