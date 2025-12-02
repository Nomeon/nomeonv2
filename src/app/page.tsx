import ProjectAccordion from "@/components/project-accordion";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <section className="container mx-auto w-full flex flex-col py-20 gap-6" id="projects">
        <h1 className="text-4xl font-bold font-baumans">Projects</h1>
        <p className="">These are some of the projects I've had the pleasure of working on:</p>
        <ProjectAccordion />
      </section>
    </div>
  );
}
