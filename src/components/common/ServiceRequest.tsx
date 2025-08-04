import React, { useState } from 'react';

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

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://conquericserver.onrender.com/api/service/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      setStatus('success');
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
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-black shadow-md rounded-xl p-8 mt-10 mb-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Request a Service</h2>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border rounded-lg w-full"
        />

        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="p-3 border rounded-lg w-full"
        >
          <option value="">Select a Service *</option>
          <option value="Website Development">Website Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Custom Software">Custom Software</option>
          <option value="2D/3D Design">2D/3D Design</option>
          <option value="Others">Others</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="budget"
            type="text"
            placeholder="Estimated Budget"
            value={formData.budget}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            name="timeline"
            type="text"
            placeholder="Timeline (e.g., 2 weeks)"
            value={formData.timeline}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>

        <textarea
          name="message"
          placeholder="Project Details *"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="p-3 border rounded-lg w-full"
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Request'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center font-medium">Your request has been submitted successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ServiceRequest;
