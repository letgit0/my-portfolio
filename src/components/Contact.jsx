import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setStatus("Please wait before sending another message.");
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
      className="bg-bg-light py-32 border-t border-zinc-100"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: Info */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-8 leading-tight">
              Let’s build something together.
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to discuss software engineering? I'm always open to interesting conversations.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email</p>
                <a href="mailto:itssmita.dev@gmail.com" className="text-xl font-bold text-zinc-900 border-b border-zinc-900 pb-1 hover:text-accent hover:border-accent transition-all">
                  itssmita.dev@gmail.com
                </a>
              </div>
              
              <div className="flex gap-8 pt-4">
                <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 hover:text-accent transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/smita27/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 hover:text-accent transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white border border-zinc-200 p-8 sm:p-12">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full py-3 border-b border-zinc-200 focus:outline-none focus:border-accent transition-all placeholder:text-zinc-300 text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full py-3 border-b border-zinc-200 focus:outline-none focus:border-accent transition-all placeholder:text-zinc-300 text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="How can I help?"
                  className="w-full py-3 border-b border-zinc-200 focus:outline-none focus:border-accent transition-all placeholder:text-zinc-300 text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="py-5 bg-zinc-900 text-white font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className={`text-[11px] font-bold uppercase tracking-widest text-center ${status.includes("successfully") ? "text-zinc-900" : "text-red-500"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;;