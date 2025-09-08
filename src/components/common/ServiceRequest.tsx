import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServiceRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'delayed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showDelayPopup, setShowDelayPopup] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [delayTimeoutId, setDelayTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (delayTimeoutId) clearTimeout(delayTimeoutId);
    };
  }, [timeoutId, delayTimeoutId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setShowSuccessPopup(false);
    setShowDelayPopup(false);

    // Set timeout for showing delay message after 10 seconds
    const delayId = setTimeout(() => {
      setShowDelayPopup(true);
    }, 10000);
    setDelayTimeoutId(delayId);

    const id = setTimeout(() => {
      if (status === 'loading') {
        setStatus('delayed');
      }
    }, 20000);

    setTimeoutId(id);

    try {
      const response = await fetch('https://conquericserver.onrender.com/api/service/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (timeoutId) clearTimeout(timeoutId);
      if (delayTimeoutId) clearTimeout(delayTimeoutId);

      if (!response.ok) {
        throw new Error('Server error');
      }

      setStatus('success');
      setShowSuccessPopup(true);
      setShowDelayPopup(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setShowDelayPopup(false);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const SuccessPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl max-w-md w-full mx-4 shadow-xl border border-cyan-500/30 animate-pop-in">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Request Received!</h3>
          <p className="text-gray-300 mb-6 text-lg">
            We've got your request and will get back to you within <span className="font-semibold text-cyan-400">24 hours</span>.
          </p>
          <button
            onClick={() => setShowSuccessPopup(false)}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const DelayPopup = () => (
    <div className="fixed inset-0 bg-black/20 bg-opacity-20 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl max-w-md w-full mx-4 shadow-xl border border-amber-500/30 animate-pop-in">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Processing Your Request</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Sorry for the delay. We are working on your submitting request. Please wait a moment.
          </p>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
          <button
            onClick={() => setShowDelayPopup(false)}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Continue Waiting
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative py-16 bg-[#06140b] overflow-hidden font-nunito" id="project-request">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Start Your Project</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your idea to life? Fill out the form below and our team will contact you within 24 hours.
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-cyan-700 to-blue-800 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Get Your Free Consultation</h2>
            <p className="text-cyan-200 text-lg">
              Let's discuss your project and create a custom solution for your business
            </p>
          </div>
          
          {/* Form section */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem]"
                >
                  <option value="" className="text-gray-500">Select a service...</option>
                  <option value="Website Development" className="text-white">Website Development</option>
                  <option value="Mobile App Development" className="text-white">Mobile App Development</option>
                  <option value="UI/UX Design" className="text-white">UI/UX Design</option>
                  <option value="Digital Marketing" className="text-white">Digital Marketing</option>
                  <option value="E-commerce Solutions" className="text-white">E-commerce Solutions</option>
                  <option value="Custom Software" className="text-white">Custom Software</option>
                  <option value="2D/3D Design" className="text-white">2D/3D Design</option>
                  <option value="IT Consultancy" className="text-white">IT Consultancy</option>
                  <option value="Others" className="text-white">Others</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                    Estimated Budget
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full pl-8 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                      placeholder="5,000 - 10,000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
                    Project Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                    placeholder="e.g., 3 months"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-white placeholder-gray-500"
                  placeholder="Describe your project goals, requirements, and any specific needs..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center font-medium text-lg"
                >
                  {status === 'loading' ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing Your Request...
                    </>
                  ) : (
                    'Submit Project Request'
                  )}
                </button>
              </div>

              {status === 'delayed' && (
                <div className="bg-amber-900 bg-opacity-30 border-l-4 border-amber-500 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-amber-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-amber-300">Processing taking longer than usual</h3>
                      <div className="mt-2 text-sm text-amber-200">
                        <p>
                          We're experiencing higher traffic than normal. Your request is still processing - please
                          wait a moment longer. Thank you for your patience!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-300">Submission Error</h3>
                      <div className="mt-2 text-sm text-red-200">
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {showSuccessPopup && <SuccessPopup />}
      {showDelayPopup && <DelayPopup />}
    </div>
  );
};

export default ServiceRequest;