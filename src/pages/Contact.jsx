import React from "react";


const Contact = () => {
  return (
    <div className="mt-20 pb-16 flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg shadow-lg mx-2">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col items-center border border-gray-200">
        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact" className="w-20 h-20 mb-4" />
        <h1 className="text-3xl font-extrabold mb-2 text-primary">Contact Us</h1>
        <p className="mb-4 text-gray-600 text-center">We'd love to hear from you! Reach out to us anytime and we'll happily answer your questions.</p>
        <div className="flex flex-col gap-3 w-full">
          <a href="mailto:surajyadav91429@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline font-medium text-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75" />
            </svg>
            surajyadav91429@gmail.com
          </a>
          <a href="tel:+919798804863" className="flex items-center gap-2 text-green-700 hover:underline font-medium text-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-3.25a.75.75 0 00-.75.75v1.25a12.75 12.75 0 01-12.75-12.75V4.5a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75z" />
            </svg>
            +91 9798804863
          </a>
        </div>
        <div className="mt-6 text-gray-500 text-center">
          <p>We will get back to you as soon as possible!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
