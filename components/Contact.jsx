import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Your message has been sent successfully.');

    console.log('Message submitted:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        {error && <div className="mb-4 text-red-500">{error}</div>}
        {success && <div className="mb-4 text-green-500">{success}</div>}

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
