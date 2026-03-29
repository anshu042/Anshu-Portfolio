import { useState } from 'react';
import SocialLinks from './SocialLinks';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center px-5 md:px-[10%] py-[100px]"
    >
      <h2 className="text-[2.5rem] font-bold mb-16 font-heading text-gray-900 dark:text-white">
        Get In Touch
      </h2>

      <div className="w-full max-w-[600px] mx-auto flex flex-col gap-6">
        <p className="text-lg text-gray-600 dark:text-slate-300">
          Want to get in touch? Just fill out the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto flex flex-col w-full"
        >
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />

          <div className="flex flex-col mb-4 relative">
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-lg p-5 text-base transition-all duration-400 ease-custom focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-col mb-4 relative">
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-lg p-5 text-base transition-all duration-400 ease-custom focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-col mb-4 relative">
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="rounded-lg p-5 text-base transition-all duration-400 ease-custom focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] resize-y bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 px-9 rounded-lg font-semibold text-base transition-all duration-400 ease-custom btn-primary-gradient border-none disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Feedback Messages */}
          {status === 'success' && (
            <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium transition-all duration-300">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium transition-all duration-300">
              Oops! Something went wrong. Please try again or email me directly.
            </div>
          )}
        </form>
      </div>

      <SocialLinks />
    </section>
  );
}
