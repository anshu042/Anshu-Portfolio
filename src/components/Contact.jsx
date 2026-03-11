import { useTheme } from '../ThemeContext';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const { isDark } = useTheme();

  const inputStyle = {
    background: isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db'}`,
    color: isDark ? '#ffffff' : '#111827',
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center px-[10%] py-[100px]"
    >
      <h2
        className="text-[2.5rem] font-bold mb-16 font-heading"
        style={{ color: isDark ? '#ffffff' : '#111827' }}
      >
        Get In Touch
      </h2>

      <div className="w-full max-w-[600px] mx-auto flex flex-col gap-6">
        <p style={{ color: isDark ? '#cbd5e1' : '#4b5563' }} className="text-lg">
          Want to get in touch? Just fill out the form below.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-[600px] mx-auto flex flex-col w-full"
        >
          <input type="hidden" name="access_key" value="714cd589-d0a8-4c1f-9569-5fba31a49b18" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-lg p-5 mb-4 text-base transition-all duration-400 ease-custom focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="rounded-lg p-5 mb-4 text-base transition-all duration-400 ease-custom focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            style={inputStyle}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="rounded-lg p-5 mb-4 text-base transition-all duration-400 ease-custom focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] resize-y"
            style={inputStyle}
          />

          <button
            type="submit"
            className="w-full py-4 px-9 rounded-lg font-semibold text-base cursor-pointer transition-all duration-400 ease-custom btn-primary-gradient hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] border-none"
          >
            Send Message
          </button>
        </form>
      </div>

      <SocialLinks />
    </section>
  );
}
