"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { TextRoll } from "./ui/text-roll";
import BookingWidget from "@/components/booking-calendar/booking-widget";
import { motion } from "motion/react";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto w-full">
      <div className="grid gap-16 2xl:grid-cols-2">
        {/* CONTACT FORM */}
        <motion.div
          id="contact-form"
          className="relative border border-border bg-background/85 backdrop-blur-sm px-6 py-7 lg:px-8"
          initial={{ opacity: 0, scale: 0.98, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* bracket corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

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

          <FieldSet className="space-y-4">
            <motion.div
              className="grid gap-4 lg:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    placeholder="Your name"
                    className="rounded-none border-border"
                  />
                </Field>
              </FieldGroup>
              <FieldGroup>
                <Field>
                  <FieldLabel>Business Name</FieldLabel>
                  <Input
                    placeholder="Your business name"
                    className="rounded-none border-border"
                  />
                </Field>
              </FieldGroup>
            </motion.div>

            <motion.div
              className="grid gap-4 lg:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-none border-border"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel>Phone</FieldLabel>
                  <Input
                    type="tel"
                    placeholder="+31 6 1234 5678"
                    className="rounded-none border-border"
                  />
                </Field>
              </FieldGroup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    placeholder="Tell me a bit about your project or question…"
                    className="min-h-[120px] resize-vertical rounded-none border-border"
                  />
                  <FieldDescription className="text-[11px] text-muted-foreground">
                    A short description is enough; I&apos;ll reply personally.
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                type="submit"
                className="mt-2"
                variant="default"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <TextRoll
                  duration={0.2}
                  getEnterDelay={() => 0.1}
                  getExitDelay={() => 0.2}
                  transition={{ ease: "easeInOut" }}
                  hovered={isHovered}
                >
                  Send message
                </TextRoll>
              </Button>
            </motion.div>
          </FieldSet>
        </motion.div>

        {/* CAL.COM SLOT */}
        <motion.div
          id="contact-call"
          className="relative border border-border bg-background/85 backdrop-blur-sm px-6 py-7 lg:px-8"
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* bracket corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

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
