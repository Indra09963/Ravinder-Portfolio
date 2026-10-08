import React from "react";
import emailjs from "@emailjs/browser";
// <-- replace these with your EmailJS values -->
const EMAILJS_SERVICE_ID = 'service_1d459wg';
const EMAILJS_TEMPLATE_ID = "template_6b10vl9";
const EMAILJS_PUBLIC_KEY = "Odv4x9jAHsrBKbBfD";

const UPLOADED_FILE_URL = "/mnt/data/WhatsApp Image 2025-11-19 at 13.50.47_561040d0.jpg";

export default function ContactPage() {
  const [form, setForm] = React.useState({
    from_name: "",
    from_email: "",
    phone: "",
    service_type: "Wedding",
    event_date: "",
    message: "",
  });

  const [status, setStatus] = React.useState({ loading: false, success: null, error: null });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    if (!form.from_name.trim()) return "Please enter your name.";
    if (!form.from_email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.from_email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter phone number.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: null, error: null });

    const err = validate();
    if (err) {
      setStatus({ loading: false, success: null, error: err });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    const templateParams = {
      from_name: form.from_name,
      from_email: form.from_email,
      phone: form.phone,
      service_type: form.service_type,
      event_date: form.event_date || "Not provided",
      message: form.message || "No message",
      file_url: UPLOADED_FILE_URL,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      setStatus({ loading: false, success: "Message sent — we'll get back to you soon.", error: null });
      setForm({
        from_name: "",
        from_email: "",
        phone: "",
        service_type: "Wedding",
        event_date: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ loading: false, success: null, error: "Failed to send message. Try again later." });
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-yellow-300 font-medium tracking-wide">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Contact & Booking</h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">Book a session or ask about availability — drop the details below and we'll reply quickly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: contact info card */}
          <div className="relative rounded-2xl p-6 bg-linear-to-b from-black/60 to-black/40 border border-gray-400 shadow-2xl backdrop-blur-md">
            <div className="rounded-xl overflow-hidden border border-white/5 p-4">
              <h3 className="text-xl font-bold text-white">Contact Info</h3>
              <p className="mt-3 text-gray-300">Prefer WhatsApp or a quick call? Reach out and we'll confirm availability.</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 border border-white/6">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5.999A2 2 0 015 4h14a2 2 0 012 1.999V18a2 2 0 01-2 2H5a2 2 0 01-2-2V5.999zM8 8l4 3 4-3" /></svg>
                  </span>
                  <div>
                    <div className="text-sm text-gray-300">Email</div>
                    <a className="text-white/90 font-medium" href="mailto:ravinder@example.com">nostalgicphotography1212@gmail.com</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 border border-white/6">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5a2 2 0 01-2 2h-3l-1 2-5-2-3-3 2-5 2-1v-3a2 2 0 012-2h4c1.657 0 3 1.343 3 3v6" /></svg>
                  </span>
                  <div>
                    <div className="text-sm text-gray-300">Phone / WhatsApp</div>
                    <a className="text-white/90 font-medium" href="https://wa.me/91XXXXXXXXXX">+91 6301979835</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 border border-white/6">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" /></svg>
                  </span>
                  <div>
                    <div className="text-sm text-gray-300">Location</div>
                    <div className="text-white/90 font-medium">Hyderabad, India</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-sm text-yellow-300 font-semibold">Availability</h4>
                <p className="text-gray-300 mt-1">Weekdays: 9AM – 8PM IST<br/>Weekends: By appointment</p>
              </div>

              <div className="mt-6  gap-3">
                <a href="#portfolio" className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/5 transition text-white">View Portfolio</a> <br /><br /><br />
                <a href="https://wa.me/91 9963179662" className="px-4 py-2 rounded-md bg-linear-to-r from-[#db992e] to-[#de9207] text-black font-semibold shadow hover:scale-[1.02] transition">Message on WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 md:p-8 bg-black/40  border border-gray-400 backdrop-blur-md shadow-xl" aria-label="Contact form">
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2 ">Full name</label>
                <input
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-md  bg-black/60 border border-amber-100 placeholder-gray-400 focus:outline-none focus:ring-0 input-gold-glow"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    type="email"
                    className="w-full px-4 py-3 rounded-md border-amber-100 bg-black/60 border  placeholder-gray-400 focus:outline-none focus:ring-0 input-gold-glow"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-md border-amber-100 bg-black/60 border placeholder-gray-400 focus:outline-none focus:ring-0 input-gold-glow"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Service</label>
                  <select
                    name="service_type"
                    value={form.service_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-amber-100 focus:outline-none input-gold-glow"
                  >
                    <option>Wedding</option>
                    <option>Pre-wedding</option>
                    <option>Events</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Preferred date</label>
                  <input
                    name="event_date"
                    value={form.event_date}
                    onChange={handleChange}
                    type="date"
                    className="w-full px-4 py-3 rounded-md bg-black/60 border border-amber-100 focus:outline-none input-gold-glow"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your event, venue and any special requests..."
                  className="w-full px-4 py-3 h-31 rounded-md bg-black/60 border border-amber-100 placeholder-gray-400 focus:outline-none input-gold-glow"
                />
              </div>

              {/* hidden field for uploaded file url */}
              <input type="hidden" name="file_url" value={UPLOADED_FILE_URL} />

              <div className="mt-6 flex items-center justify-between">
                <div>
                  {status.error && <p className="text-sm text-rose-400">{status.error}</p>}
                  {status.success && <p className="text-sm text-emerald-400">{status.success}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-linear-to-r from-[#E5B567] to-[#D9A74B] text-black font-semibold hover:scale-[1.02] transform transition shadow-lg"
                >
                  {status.loading ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>

            {/* subtle decorative gold ring */}
            <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full border-2 border-yellow-300/30 filter blur-xl opacity-30 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* extra styles: gold-focus, input glow, fade animation */}
      <style>{`
        .input-gold-glow:focus {
          box-shadow: 0 0 0 4px rgba(229,181,103,0.09), 0 6px 30px rgba(0,0,0,0.6);
          border-color: rgba(229,181,103,0.9);
        }

        /* subtle entrance */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeInUp 520ms ease-out both;
        }
      `}</style>
    </section>
  );
}
