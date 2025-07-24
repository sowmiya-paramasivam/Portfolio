import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert('Failed to send message. Try again later.');
      }
    );
  };

  return (
    <section className="mt-10 min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 lg:px-24 py-12 relative overflow-hidden animate-fadeIn">
       <img src="/mkm5.jpg" alt="bgimg" className="fixed inset-0 w-full h-full object-cover z-0" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-customBlue1 font-leckerli mb-6 z-10">
        Contact Me
      </h1>

      <div className="w-full max-w-xl space-y-6 z-10">
        <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-4">
          <div>
            <label className="text-lg text-gray-300">Your Name</label>
            <input type="text" name="user_name" required placeholder="Enter your name"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-lg text-gray-300">Your Email</label>
            <input type="email" name="user_email" required placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-lg text-gray-300">Your Message</label>
            <textarea name="message" rows="4" required placeholder="Enter your message"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit"
            className="w-full bg-customBlue1 hover:bg-customBlue text-black font-bold py-3 rounded-full transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
