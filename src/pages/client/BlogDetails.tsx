import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogData";
import { ArrowLeft, Calendar, Clock, User, Share2, MessageSquare } from "lucide-react";
import BlogIcon from "@/components/blog/BlogIcon";
import ScrollToTop from "@/components/ScrollToTop";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === Number(id));

  if (!blog) {
    return <div className="text-white text-center py-20">Blog post not found</div>;
  }

  return (

    <>
      <main className="flex bg-[#06140b] justify-center md:lg:xl:2xpy-24">
        <div className=""></div>

        <div className="section-padding  min-h-screen">
          <ScrollToTop />
          <div className="container py-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-blue-400 mb-8 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </button>

            {/* Blog Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <BlogIcon name={blog.iconName} className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full">
                  {blog.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">{blog.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{blog.author} • {blog.authorRole}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={blog.images[0]}
                alt={blog.title}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-blog.jpg";
                }}
              />
            </div>

            {/* Blog Content */}
            <div className="prose prose-invert max-w-none">
              {blog.description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <h2 className="text-2xl font-bold text-gray-200 mt-8 mb-4">Key Highlights</h2>
              <ul className="space-y-3 mb-8">
                {blog.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Additional Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {blog.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${blog.title} ${index + 2}`}
                    className="rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-blog.jpg";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Social Sharing */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    <span>Leave a comment</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">Share:</span>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </main>

    </>

  );
};

export default BlogDetails;