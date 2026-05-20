import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setResult("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "45ebdfa2-6836-43a1-adb7-33bf6ded6479");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Success!");
        toast.success("Message sent. Nikhil will get back within 24h.");
        form.reset();
      } else {
        setResult("Error");
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Error");
      toast.error("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-scarlet">
            <span className="h-px w-8 bg-scarlet" /> Contact
          </div>
          <h2 className="font-display text-5xl text-creme sm:text-6xl">
            Let's cut
            <br />
            something great.
          </h2>
          <p className="mt-6 max-w-md text-sm text-creme/60">
            Available for freelance edits, newsroom collaborations and full-time roles starting
            2026.
          </p>
          <div className="mt-10 space-y-5 text-creme/80">
            <a
              href="mailto:pandeynikhil606@gmail.com"
              className="ease-cinema group flex items-center gap-4 hover:text-creme"
            >
              <Mail className="h-4 w-4 text-scarlet" /> pandeynikhil606@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="tel:+918595838403"
              className="ease-cinema group flex items-center gap-4 hover:text-creme"
            >
              <Phone className="h-4 w-4 text-scarlet" /> +91 85958 38403
            </a>
            <div className="flex items-center gap-4">
              <MapPin className="h-4 w-4 text-scarlet" /> Noida · New Delhi NCR · India
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={onSubmit}
          className="glass-panel rounded-3xl p-6 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@channel.com" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-creme/60">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about the project, deadline and platform..."
              className="ease-cinema w-full rounded-xl border border-creme/15 bg-ink/40 px-4 py-3 text-creme placeholder:text-creme/30 outline-none transition-colors focus:border-scarlet"
            />
          </div>
          <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-creme/80">
            <input
              type="checkbox"
              name="from_media_company"
              className="peer h-4 w-4 accent-scarlet"
            />
            I'm from a news / media company
          </label>
          <button
            type="submit"
            data-magnetic
            disabled={sending}
            className="ease-cinema mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-scarlet px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-creme transition-all hover:scale-[1.01] hover:scarlet-glow disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"} <ArrowUpRight className="h-4 w-4" />
          </button>
          {result && (
            <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-creme/60">
              {result}
            </p>
          )}
        </motion.form>
      </div>

      <a
        href="https://wa.me/918595838403"
        target="_blank"
        rel="noreferrer"
        data-magnetic
        aria-label="WhatsApp"
        className="ease-cinema fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-scarlet text-creme shadow-[0_15px_40px_-10px_rgba(245,51,44,0.6)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-creme/60">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="ease-cinema w-full rounded-xl border border-creme/15 bg-ink/40 px-4 py-3 text-creme placeholder:text-creme/30 outline-none transition-colors focus:border-scarlet"
      />
    </div>
  );
}
