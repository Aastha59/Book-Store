import { useState, useEffect } from "react";

function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const dm = darkMode;
  const bg    = dm ? "bg-gray-900" : "bg-[#FAF8F5]";
  const text  = dm ? "text-white"  : "text-gray-900";
  const muted = dm ? "text-gray-400" : "text-gray-500";
  const card  = dm ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";
  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 " +
    (dm
      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-yellow-400 focus:bg-gray-600"
      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-yellow-400 focus:bg-white");

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setSending(true);
    // Simulate send — replace with your API call
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  const contacts = [
    { icon: "✉", label: "Email", value: "pressesbytns@gmail.com", href: "mailto:pressesbytns@gmail.com" },
    { icon: "📍", label: "Location", value: "India", href: null },
    { icon: "📸", label: "Instagram", value: "@pressesbytns", href: "https://instagram.com/pressed_by_tns?igsh=amVjeW8zYXFjNXBk" },
  ];

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>

      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

      <div className="max-w-5xl mx-auto px-4 pt-16 pb-24">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className={`text-[11px] uppercase tracking-[0.35em] font-semibold mb-3 ${dm ? "text-yellow-400" : "text-yellow-600"}`}>
            Get In Touch
          </p>
          <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
          <p className={`text-sm max-w-md mx-auto leading-relaxed ${muted}`}>
            Have a question about the book, an order, or just want to say hi?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((c) => (
              <div key={c.label} className={`rounded-2xl border p-5 shadow-sm flex items-center gap-4 ${card}`}>
                <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-xl shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className={`text-[11px] uppercase tracking-wider font-semibold mb-0.5 ${muted}`}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-medium hover:text-yellow-500 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Response time note */}
            <div className={`rounded-2xl border p-5 shadow-sm ${card}`}>
              <p className={`text-[11px] uppercase tracking-wider font-semibold mb-2 ${muted}`}>Response Time</p>
              <p className="text-sm leading-relaxed">
                We typically reply within <span className="font-semibold text-yellow-500">24–48 hours</span>. For urgent order issues, please mention your order ID in the subject line.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="lg:col-span-3">
            <div className={`rounded-2xl border p-7 shadow-sm ${card}`}>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-bounce">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-serif font-bold mb-2">Message Sent!</h2>
                  <p className={`text-sm ${muted}`}>Thank you for reaching out. We'll get back to you soon.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-yellow-400 text-black text-sm font-bold hover:bg-yellow-300 transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-lg font-serif font-bold mb-5">Send a Message</h2>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className={`block text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Your Name</label>
                      <input name="name" type="text" value={form.name} onChange={handleChange}
                        placeholder="Jasmeet Kaur"
                        className={`${inputBase} ${errors.name ? "border-red-400" : ""}`} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">⚠ {errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className={`block text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="hello@you.com"
                        className={`${inputBase} ${errors.email ? "border-red-400" : ""}`} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">⚠ {errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div className="col-span-2">
                      <label className={`block text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Subject</label>
                      <input name="subject" type="text" value={form.subject} onChange={handleChange}
                        placeholder="Order query, feedback, collaboration…"
                        className={`${inputBase} ${errors.subject ? "border-red-400" : ""}`} />
                      {errors.subject && <p className="text-red-400 text-xs mt-1">⚠ {errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="col-span-2">
                      <label className={`block text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${muted}`}>Message</label>
                      <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Write your message here…"
                        className={`${inputBase} resize-none ${errors.message ? "border-red-400" : ""}`} />
                      {errors.message && <p className="text-red-400 text-xs mt-1">⚠ {errors.message}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="relative w-full py-4 rounded-xl bg-yellow-400 text-black font-bold text-sm uppercase tracking-widest overflow-hidden
                      hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:scale-[0.98]
                      transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;