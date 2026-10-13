"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "./Reveal";
import { InstagramIcon, LinkedinIcon, PinterestIcon, XIcon } from "./icons";

// Keyed by each service page's own route slug, so a page's CTA can link to
// /contact-us?service=<its-own-folder-name> without a separate lookup to
// maintain. Reason/subject/message/buttonLabel copy is Mohamed's approved
// text from Manzel_Studio_Service_Contact_Messages.pdf - kept verbatim.
export const SERVICE_ENQUIRIES: Record<
  string,
  { reason: string; subject: string; buttonLabel: string; message: string }
> = {
  "rooming-house-building-design": {
    reason: "Rooming House Building Design",
    subject: "Rooming House Building Design Enquiry",
    buttonLabel: "Discuss Your Rooming House Project",
    message:
      "Hi Manzel Studio,\nI'm interested in discussing a rooming house building design project.\nProperty address:\nIs this a new build or conversion:\nProposed number of rooms/residents:\nCurrent project stage:\nExisting plans or property documents available:\nPreferred timeframe:\nAdditional details:",
  },
  "granny-flat-building-design": {
    reason: "Small Second Dwelling (Granny Flat) Design",
    subject: "Small Second Dwelling Design Enquiry",
    buttonLabel: "Discuss Your Small Second Dwelling Project",
    message:
      "Hi Manzel Studio,\nI'm interested in exploring a small second dwelling for my property.\nProperty address:\nIntended use of the dwelling:\nPreferred number of bedrooms:\nExisting home or site plans available:\nCurrent project stage:\nPreferred timeframe:\nAdditional details:",
  },
  "building-permit-drawings": {
    reason: "Building Permit Drawings",
    subject: "Building Permit Drawings Enquiry",
    buttonLabel: "Enquire About Building Permit Drawings",
    message:
      "Hi Manzel Studio,\nI require building permit drawings and would like to discuss what documentation is needed for my project.\nProperty address:\nProject type:\nBrief description of the proposed works:\nCurrent design or approval stage:\nPlanning permit obtained, required or unknown:\nExisting drawings or reports available:\nRequired timeframe:\nAdditional details:",
  },
  "residential-building-design": {
    reason: "Residential Building Design",
    subject: "Residential Building Design Enquiry",
    buttonLabel: "Discuss Your Residential Project",
    message:
      "Hi Manzel Studio,\nI'm interested in discussing a residential building design project.\nProperty address:\nProject type - new home, extension, renovation or multi-dwelling:\nBrief description of what I would like to achieve:\nCurrent project stage:\nExisting plans or property documents available:\nApproximate budget, if known:\nPreferred timeframe:\nAdditional details:",
  },
  "commercial-building-design": {
    reason: "Commercial Building Design",
    subject: "Commercial Building Design Enquiry",
    buttonLabel: "Discuss Your Commercial Project",
    message:
      "Hi Manzel Studio,\nI'm interested in discussing a commercial building design project.\nPremises address:\nBusiness or commercial use:\nProject type - new building, fit-out, renovation or development:\nBrief description of the project:\nCurrent project or approval stage:\nTarget opening or completion date:\nExisting plans or documents available:\nAdditional details:",
  },
  "health-space-design": {
    reason: "Health Space Design",
    subject: "Health Space Design Enquiry",
    buttonLabel: "Discuss Your Health Space Project",
    message:
      "Hi Manzel Studio,\nI'm interested in discussing the design of a healthcare or clinical space.\nProperty or premises address:\nType of healthcare service or facility:\nNew build, fit-out, renovation or expansion:\nRequired consulting, treatment or support spaces:\nCurrent project or approval stage:\nTarget opening or completion date:\nExisting plans or documents available:\nAdditional details:",
  },
  "site-assessment": {
    reason: "Site or Feasibility Assessment",
    subject: "Site Assessment Enquiry",
    buttonLabel: "Start Your Site Assessment",
    message:
      "Hi Manzel Studio,\nI'm interested in assessing the development potential of a property.\nProperty address:\nAssessment required - Site Assessment, Feasibility Assessment or unsure:\nDo I currently own the property:\nWhat I am considering for the site:\nPreferred number or type of dwellings, if known:\nAny known site concerns or restrictions:\nRelevant documents available:\nAdditional details:",
  },
};
const REASON_OPTIONS = Object.values(SERVICE_ENQUIRIES).map((s) => s.reason);

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
  reason: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  hearAbout: "",
  reason: "",
  message: "",
};

const inputClass =
  "w-full border-b border-line bg-transparent py-2 text-[15px] text-ink placeholder:text-muted focus:border-ink focus:outline-none";

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
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Pre-fill (not lock) the reason and message when arriving from a
  // service page's own CTA, e.g. /contact-us?service=granny-flat-building-design.
  // Both stay editable - this is a starting point, not a forced value.
  useEffect(() => {
    const service = searchParams.get("service");
    const match = service ? SERVICE_ENQUIRIES[service] : undefined;
    if (match) {
      setForm((f) => ({ ...f, reason: match.reason, message: match.message }));
    }
  }, [searchParams]);

  const subject = form.reason
    ? Object.values(SERVICE_ENQUIRIES).find((s) => s.reason === form.reason)?.subject ??
      `${form.reason} Enquiry`
    : "General Enquiry";

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // Manually changing the reason also swaps in that service's prefilled
  // message template (still fully editable afterwards), matching what
  // happens when arriving via a service page's own CTA.
  const updateReason = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const reason = e.target.value;
    const match = Object.values(SERVICE_ENQUIRIES).find((s) => s.reason === reason);
    setForm((f) => ({ ...f, reason, message: match ? match.message : "" }));
  };

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
                className="space-y-4"
                toolname="requestBuildingDesignConsultation"
                tooldescription="Submit a contact enquiry to Manzel Studio, a Melbourne building design studio, to request a free consultation or ask a question about a residential, commercial, or health-space project. Requires the user to review and click Submit themselves - this tool fills the form but does not send it."
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="subject" value={subject} />
                <p className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                  <label>
                    Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="reason" className="mb-1 block text-[13px] font-medium text-ink-2">
                    Reason for Contacting
                  </label>
                  <div className="relative">
                    <select
                      id="reason"
                      name="reason"
                      value={form.reason}
                      onChange={updateReason}
                      className={`${inputClass} appearance-none bg-white pr-6`}
                      toolparamdescription="What the enquirer is contacting about - the specific service, if any, or general enquiry"
                    >
                      <option value="">General Enquiry</option>
                      {REASON_OPTIONS.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-[13px] font-medium text-ink-2">
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
                    <label htmlFor="lastName" className="mb-1 block text-[13px] font-medium text-ink-2">
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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-[13px] font-medium text-ink-2">
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
                    <label htmlFor="phone" className="mb-1 block text-[13px] font-medium text-ink-2">
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
                </div>

                <div>
                  <label htmlFor="address" className="mb-1 block text-[13px] font-medium text-ink-2">Address of Site</label>
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
                  <label htmlFor="hearAbout" className="mb-1 block text-[13px] font-medium text-ink-2">
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
                  <label htmlFor="message" className="mb-1 block text-[13px] font-medium text-ink-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={10}
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
