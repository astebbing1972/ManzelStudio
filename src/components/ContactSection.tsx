"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { InstagramIcon, LinkedinIcon, PinterestIcon, XIcon } from "./icons";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon />,
  LinkedIn: <LinkedinIcon />,
  X: <XIcon />,
  Pinterest: <PinterestIcon />,
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  hearAbout: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  hearAbout: "",
  message: "",
};

const inputClass =
  "w-full border-b border-line bg-transparent py-3 text-[15px] text-ink placeholder:text-muted focus:border-ink focus:outline-none";

export default function ContactSection({
  title,
  lead,
  callUs,
  visitUs,
  emailUs,
  social,
}: {
  title: string;
  lead: string;
  callUs: { name: string; phone: string; href: string }[];
  visitUs: { address: string; cta: { label: string; href: string } };
  emailUs: { email: string; href: string; instagramHref: string };
  social: { label: string; href: string }[];
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const entries = Array.from(new FormData(e.currentTarget).entries()).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string"
    );

    try {
      const response = await fetch("/forms/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(entries).toString(),
      });

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-6 py-[80px] md:px-10 md:py-[125px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-[100px]">
        <Reveal>
          <div>
            <h2 className="about-heading mb-2.5 font-medium tracking-[-0.044em] text-black">{title}</h2>
            <p className="max-w-[440px] text-[17px] leading-[30px] text-black">{lead}</p>

            <div className="mt-12 space-y-9">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="w-full sm:w-[28%]">
                  <p className="text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black">Call Us</p>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  {callUs.map((c) => (
                    <div key={c.href}>
                      <a
                        href={c.href}
                        className="text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black transition-colors duration-500 hover:text-[#242424]"
                      >
                        {c.phone}
                      </a>
                      <p className="text-[17px] leading-[30px] text-black">({c.name})</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="w-full sm:w-[28%]">
                  <p className="text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black">Visit Us</p>
                </div>
                <div className="flex-1">
                  <p className="text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black">
                    {visitUs.address}
                  </p>
                  <a
                    href={visitUs.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-medium text-black underline transition-colors duration-500 hover:text-[#242424]"
                  >
                    {visitUs.cta.label}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="w-full sm:w-[28%]">
                  <p className="text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black">Email Us</p>
                </div>
                <div className="flex-1">
                  <a
                    href={emailUs.href}
                    className="block text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black transition-colors duration-500 hover:text-[#242424]"
                  >
                    {emailUs.email}
                  </a>
                  <p className="text-[15px] text-black/70">
                    Or message us on instagram{" "}
                    <a
                      href={emailUs.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline"
                    >
                      here
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="w-full sm:w-[28%]">
                  <p className="text-[20px] font-medium leading-[30px] tracking-[-0.042em] text-black">Social</p>
                </div>
                <div className="flex flex-1 items-center gap-4">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-black transition-colors duration-500 hover:text-black/60"
                    >
                      {socialIcons[s.label]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <h3 className="text-[24px] font-medium text-black">Thank you.</h3>
                <p className="mt-3 max-w-[320px] text-[15px] leading-[1.6] text-ink-2">
                  We&rsquo;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
                toolname="requestBuildingDesignConsultation"
                tooldescription="Submit a contact enquiry to Manzel Studio, a Melbourne building design studio, to request a free consultation or ask a question about a residential, commercial, or health-space project. Requires the user to review and click Submit themselves - this tool fills the form but does not send it."
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                  <label>
                    Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-[13px] font-medium text-ink-2">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={update("firstName")}
                      className={inputClass}
                      toolparamdescription="The enquirer's first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-[13px] font-medium text-ink-2">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={update("lastName")}
                      className={inputClass}
                      toolparamdescription="The enquirer's last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={update("email")}
                    className={inputClass}
                    toolparamdescription="The enquirer's email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium text-ink-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputClass}
                    toolparamdescription="The enquirer's phone number"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="mb-1.5 block text-[13px] font-medium text-ink-2">Address of Site</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={update("address")}
                    className={inputClass}
                    toolparamdescription="The street address of the project site being enquired about, if known"
                  />
                </div>

                <div>
                  <label htmlFor="hearAbout" className="mb-1.5 block text-[13px] font-medium text-ink-2">
                    How Did You Hear About Us?
                  </label>
                  <input
                    type="text"
                    id="hearAbout"
                    name="hearAbout"
                    value={form.hearAbout}
                    onChange={update("hearAbout")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-ink-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputClass} resize-none`}
                    toolparamdescription="What the enquirer wants help with - e.g. project type, goals, or questions for Manzel Studio"
                  />
                </div>

                {error && (
                  <p className="text-[14px] text-red-600">
                    Something went wrong sending your message. Please try again.
                  </p>
                )}

                <button type="submit" disabled={submitting} className="btn-fill w-full justify-center sm:w-auto">
                  {submitting ? "Sending…" : "Submit"} <span className="arr" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
