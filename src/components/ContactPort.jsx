import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Globe, Clock3 } from "lucide-react";

const ContactPort = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const contactEmail = "vaxsoradevs@gmail.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");
    setIsError(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service || "General Inquiry",
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsError(true);
      setStatus(
        "Message could not be sent. Please try again or contact us by email.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50/70 px-3.5 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10";

  return (
    <section
      id="contact"
      className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-[750px] mb-12">
          <p className="uppercase text-[13px] font-medium tracking-[2px] text-blue-600">
            Get in touch
          </p>

          <h1 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-gray-900">
            Let's talk.
            <span className="text-gray-400"> about your project.</span>
          </h1>

          <h3 className="text-gray-500 text-[15px] sm:text-[16px] font-medium">
            Have an idea in mind? Tell us a little about it, and let's explore
            how we can bring it to life.
          </h3>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-14">
          <div>
            <div className="border-t border-gray-200">
              <a
                href={`mailto:${contactEmail}`}
                className="group flex gap-3.5 border-b border-gray-200 py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-gray-900">
                    Email us
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                    Have a question or project idea?
                  </p>

                  <p className="mt-1.5 break-all text-sm font-medium text-gray-800 transition-colors group-hover:text-blue-600">
                    {contactEmail}
                  </p>
                </div>
              </a>

              <div className="flex gap-3.5 border-b border-gray-200 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                  <Globe size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    Work with us
                  </h2>

                  <p className="mt-1 max-w-xs text-xs leading-6 text-gray-500 sm:text-sm">
                    Creative solutions for businesses, brands, and independent
                    creators.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 border-b border-gray-200 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                  <Clock3 size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    The next step
                  </h2>

                  <p className="mt-1 max-w-xs text-xs leading-6 text-gray-500 sm:text-sm">
                    Share your requirements and we'll discuss the best way to
                    move forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-gray-50 p-4 sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                Our services
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Branding",
                  "Graphic Design",
                  "eBook Design",
                  "Editing",
                  "Publishing",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-gray-600 sm:text-xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-7">
            <div className="mb-6">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Start a project
              </h2>

              <p className="mt-1.5 text-xs leading-6 text-gray-500 sm:text-sm">
                Fill out the form and tell us what you need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    Full name <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    Email address <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-xs font-medium text-gray-700 sm:text-sm"
                >
                  Service you're interested in
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Choose a service</option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Logo Design & Branding">
                    Logo Design & Branding
                  </option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="eBook Cover Design">eBook Cover Design</option>
                  <option value="eBook Editing">eBook Editing</option>
                  <option value="eBook Publishing">eBook Publishing</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-gray-700 sm:text-sm"
                >
                  Project details <span className="text-blue-600">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your idea, goals, or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} min-h-28 resize-y leading-6`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSending ? "Sending..." : "Send inquiry"}

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-[11px] leading-5 ${
                  isError ? "text-red-600" : "text-gray-500"
                }`}
              >
                {status || "Your details will be sent securely."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPort;
