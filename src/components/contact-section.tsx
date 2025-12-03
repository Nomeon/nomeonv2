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
import { Booker } from "@calcom/atoms";
import { useState } from "react";
import { TextRoll } from "./ui/text-roll";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto w-full">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* CONTACT FORM */}
        <div
          id="contact-form"
          className="relative border border-border bg-background/85 backdrop-blur-sm px-6 py-7 lg:px-8"
        >
          {/* bracket corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Direct message
            </p>
            <h3 className="font-baumans text-xl tracking-wide">
              Send me a message
            </h3>
          </div>

          <FieldSet className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
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
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
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
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel>Message</FieldLabel>
                <Textarea
                  placeholder="Tell me a bit about your project or question…"
                  className="min-h-[120px] resize-vertical rounded-none border-border"
                />
                <FieldDescription className="text-[11px] text-muted-foreground">
                  A short description is enough; I'll reply personally.
                </FieldDescription>
              </Field>
            </FieldGroup>

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
          </FieldSet>
        </div>

        {/* CAL.COM SLOT */}
        <div
          id="contact-call"
          className="relative border border-border bg-background/85 backdrop-blur-sm px-6 py-7 lg:px-8"
        >
          {/* bracket corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-border" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-border" />

          <div className="mb-4">
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
          </div>

          <div className="mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
