import { useState } from "react";
import emailjs from "@emailjs/browser";
import {Turnstile} from "react-turnstile";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [captchaToken, setCaptchaToken] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("website")) {
      return;
    }

    const data = {
      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      message: formData.get("message")?.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("Please fill all fields.");
      return;
    }

    // Length limits
    if (data.name.length > 100) {
      setStatus("Name is too long.");
      return;
    }

    if (data.email.length > 254) {
      setStatus("Email is too long.");
      return;
    }

    if (data.message.length > 2000) {
      setStatus("Message is too long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    // Prevent rapid submissions
    const now = Date.now();

    if (now - lastSubmitTime < 10000) {
      setStatus("Please wait before sending another message.");
      return;
    }
    if (!captchaToken) {
      setStatus("Please complete verification.");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setLastSubmitTime(Date.now());
        setCaptchaToken("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus("Something went wrong. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white px-6 sm:px-10 md:px-20 py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-sky-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-16 relative z-10 text-center">
        <p className="text-sky-400 font-bold tracking-widest uppercase text-[10px] mb-4">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Let’s <span className="text-gradient">build</span> something
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Got an idea, a project, or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: direct contact & social */}
          <div className="lg:col-span-5 space-y-8">
            <div className="group glass p-8 rounded-3xl hover:border-sky-500/30 transition-all shadow-2xl shadow-sky-500/5">
               <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] mb-4">Direct Email</p>
               <a
                href="mailto:smita16025@gmail.com"
                className="text-lg sm:text-xl font-bold text-sky-200 hover:text-sky-400 transition-colors tracking-tight block wrap-break-word"
              >
                smita16025@gmail.com
              </a>
            </div>

            <div className="glass p-8 rounded-3xl space-y-6">
              <p className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Social Connect</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-sky-500/30 transition-all group">
                  <span className="group-hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/smita-/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-sky-500/30 transition-all group">
                  <span className="group-hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl shadow-2xl shadow-sky-500/5">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    maxLength={100}
                    className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-700 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    placeholder="youremail@example.com"
                    className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-700 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  maxLength={2000}
                  placeholder="Tell me about your project..."
                  className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-700 text-sm resize-none"
                ></textarea>
              </div>
              <Turnstile
  sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
  onVerify={(token) => {
    setCaptchaToken(token);
  }}
  onExpire={() => {
    setCaptchaToken("");
  }}
/>

              <button
                type="submit"
                disabled={loading}
                className="group relative px-10 py-5 bg-sky-500 text-slate-900 font-black uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 text-[10px] shadow-xl shadow-sky-500/20"
              >
                <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              {/* status message */}
              {status && (
                <div className={`p-4 rounded-xl text-[10px] font-black uppercase tracking-widest text-center ${status.includes("successfully") ? "bg-sky-500/10 text-sky-400" : "bg-red-500/10 text-red-400"}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;