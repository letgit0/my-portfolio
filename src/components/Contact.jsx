import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("Please fill all fields.");
      return;
    }

    // simple email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white px-8 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="max-w-2xl mb-12">
        <p className="text-slate-400 mb-2">Get in touch</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s build something
        </h2>
        <p className="text-slate-300">
          Got an idea, a project, or just want to say hi?  
          My inbox is open — I’ll try not to take forever to reply.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        
        {/* LEFT: direct contact */}
        <div className="space-y-4">
          <p className="text-slate-400 text-sm">Prefer email?</p>

          <a
            href="mailto:youremail@example.com"
            className="text-sky-400 hover:underline"
          >
            smita16025@gmail.com
          </a>

          <p className="text-slate-400 text-sm pt-4">
            Or reach out on:
          </p>

          <div className="flex gap-4 text-sm">
            <a href="https://github.com/letgit0" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/smita-/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT: form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="p-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-sky-400"
          />

          <input
            type="email"
            name="email"
            placeholder="youremail@example.com"
            className="p-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-sky-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="What's on your mind?"
            className="p-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-sky-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-sky-400 text-black font-semibold rounded-md hover:bg-sky-500 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {/* status message */}
          {status && (
            <p className="text-sm text-slate-300 mt-2">
              {status}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;