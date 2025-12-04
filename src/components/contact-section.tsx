import BookingWidget from "@/components/booking-calendar/booking-widget";
import { motion } from "motion/react";
import ContactForm from "./contact-form";


export default function ContactSection() {
  return (
    <div className="container mx-auto w-full">
      <div className="grid gap-16 2xl:grid-cols-2">
        {/* CONTACT FORM */}
        <motion.div
          id="contact-form"
          className="group relative border border-border bg-background/85 backdrop-blur-sm px-6 py-7 lg:px-8"
          initial={{ opacity: 0, scale: 0.98, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* bracket corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border group-hover:border-primary transition-colors duration-300" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border group-hover:border-primary transition-colors duration-300" />

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Direct message
            </p>
            <h3 className="font-baumans text-xl tracking-wide">
              Send me a message
            </h3>
          </motion.div>

          <ContactForm />
        </motion.div>

        {/* CAL.COM SLOT */}
        <motion.div
          id="contact-call"
          className="group relative border border-border bg-background/85 backdrop-blur-sm px-6 py-7 lg:px-8"
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* bracket corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border group-hover:border-primary transition-colors duration-300" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border group-hover:border-primary transition-colors duration-300" />

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Schedule
            </p>
            <h3 className="font-baumans text-xl tracking-wide">
              Prefer a quick call?
            </h3>
            <p className="text-xs text-muted-foreground">
              Schedule a short, free of charge 30-minute meeting to discuss your
              needs.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <BookingWidget
              eventTypeId={process.env.NEXT_PUBLIC_CALCOM_EVENT_TYPE_ID || ""}
              eventLength={30}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
