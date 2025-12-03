"use client";

import SectionHeader from "@/components/custom/section-header";
import ProjectAccordion from "@/components/project-accordion";
import BackgroundSection from "@/components/background-section";
import IntroSection from "@/components/intro-section";
import ContactSection from "@/components/contact-section";
import ServicesSection from "@/components/services-section";

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <section
        id="intro"
        className="container mx-auto w-full py-24 lg:py-48 px-6 lg:px-12 min-h-dvh flex items-center justify-center"
      >
        <IntroSection />
      </section>

      <section
        id="about"
        className="relative w-full overflow-hidden py-12 lg:py-24"
      >
        <BackgroundSection />
      </section>

      <section
        id="projects"
        className="container mx-auto w-full py-12 lg:py-20 flex flex-col gap-10 px-6 lg:px-12"
      >
        <SectionHeader
          index="02"
          meta="Work"
          title="Projects"
          subtitle="Selected client work & own products"
          description="A non-exhaustive showcase of the projects I have worked on: from production simulations and IFC tooling to full SaaS platforms and high-performance websites."
        />
        <ProjectAccordion />
      </section>

      <section 
        id="services"
        className="container mx-auto w-full py-12 lg:py-20 flex flex-col gap-10 px-6 lg:px-12"
      >
        <SectionHeader
          index="03"
          meta="What I do"
          title="Services"
          subtitle="How I can help your business"
          description="I offer a range of services to help businesses streamline their operations and improve efficiency. Whether you need custom software development, process optimization, or data analysis, I have the skills and experience to deliver results."
        />
        <ServicesSection />
      </section>

      <section
        id="contact"
        className="container mx-auto w-full py-12 lg:py-20 flex flex-col gap-10 px-6 lg:px-12"
      >
        <SectionHeader
          index="04"
          meta="Get in touch"
          title="Contact"
          subtitle="Let's work together"
          description="Dealing with messy processes, outdated tools, or workflow chaos? This is where I help. If something feels slow, manual or fragile inside your company, it’s usually fixable with the right technical approach."
        />
        <ContactSection />
      </section>
    </div>
  );
}
