import { useState } from 'react';
import { MapPin, Phone, Mail, Send, User, Building, MessageSquare, Clock, Globe } from 'lucide-react';

export default function ModernContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('https://conquericserver.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: '',
          company: ''
        });
      } else {
        throw new Error(data.message || 'Server responded with an error');
      }
    } catch (error) {
      console.error('API Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error
          ? error.message
          : 'Sorry, there was a problem sending your message. Please try again later or contact us directly at weareconqueric@gmail.com.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Send us a Message</h2>
              </div>

              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-900/30 text-green-300 border border-green-800/50' : 'bg-red-900/30 text-red-300 border border-red-800/50'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-200">
                      <User className="h-4 w-4 mr-2 text-blue-400" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="flex items-center text-sm font-medium text-gray-200">
                      <Building className="h-4 w-4 mr-2 text-purple-400" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-200">
                      <Mail className="h-4 w-4 mr-2 text-blue-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-200">
                      <Phone className="h-4 w-4 mr-2 text-green-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="+88 01XXX-XXXXXX"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-200">
                    <MessageSquare className="h-4 w-4 mr-2 text-blue-400" />
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project, ideas, or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-500 hover:to-purple-500 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Globe className="h-5 w-5 mr-3 text-blue-400" />
                Quick Contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                  <div className="bg-blue-600 p-2 rounded-full mt-1">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call Us</p>
                    <a href="tel:+8801819454892" className="text-white font-medium hover:text-blue-300 transition-colors">
                      +88 01819454892
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                  <div className="bg-purple-600 p-2 rounded-full mt-1">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <a href="mailto:weareconqueric@gmail.com" className="text-white font-medium hover:text-purple-300 transition-colors break-all">
                      weareconqueric@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                  <div className="bg-amber-600 p-2 rounded-full mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Location</p>
                    <p className="text-white font-medium">
                      Currently working virtually
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Clock className="h-5 w-5 mr-3 text-amber-400" />
                Business Hours
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Saturday - Thursday</span>
                  <span className="text-white font-medium">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Friday</span>
                  <span className="text-white font-medium">8PM - 11PM</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700">
              <div className="p-6 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-red-400" />
                  Find Us
                </h3>
              </div>
              <div className="h-56 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977741619!2d90.349285767855!3d23.78077774449031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1651154250290!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-gray-800/50 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-white font-medium">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}