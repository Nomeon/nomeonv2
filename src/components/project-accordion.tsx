import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Code,
  CheckCircle,
} from "lucide-react";

// Project data structure
const projectsData = [
  {
    id: "1",
    title: "gewoonhout",
    year: 2022,
    image: null,
    challenge: [
      "Work preparators spent several days manually extracting data from 3D IFC models into Excel sheets, as each of the elements had to be handled. This was time-consuming and very prone to error.",
      "Additionally, the same steps had to be repeated for each project, further increasing the workload. There was also no time to fully integrate BIM processes into the workflow, which could take another 2+ years before that was feasible.",
    ],
    solution: [
      "I've developed an easy-to-use Python tool which loads the IFC models, checks the data on completeness and correctness, and automatically extracts the required information into CSV files ready to be sent to the milling companies. This reduces the manual work from days of checking each IFC model to just a few minutes of running the tool.",
      "This allowed the company to continue working on a plan to fully integrate the pipeline, without having to rush it due to immediate project needs. This tool also showcased the potential for further automation and optimization in the workflow.",
    ],
    benefits: [
      "Significant productivity gains",
      "Reduced human error",
      "Optimized workflow",
    ],
    technologies: ["Python", "IfcOpenshell", "PythonOCC-core"],
  },
  {
    id: "2",
    title: "Koopmans Bouwgroep",
    image: null,
    challenge:
      "The company struggled with a wildly inefficient workflow: calculators had to perform the same calculation twice just to get ERP-compatible output. IBIS Trad, the estimating software, provided almost no flexibility in how data could be exported, while the ERP system expected a very rigid and outdated format. Because the two systems couldn't speak the same language, every project required manual rework, duplicated effort, and endless copy-pasting. This not only slowed down the calculation team, but also increased the risk of inconsistent data and costly mistakes.",
    solution:
      "To eliminate the double-work, I built a lightweight desktop application using Tauri, combining a Rust backend with a TypeScript frontend. The tool ingests IBIS Trad output files, applies all required business rules, and transforms the data into the exact structure expected by the ERP system. The conversion happens automatically within seconds, allowing calculators to perform their work once and rely on the tool to generate ERP-ready output. The application also centralizes and validates business logic, reducing the number of hidden, person-specific workflows.",
    benefits: [
      "Improved accuracy through dynamic output generation",
      "Enhanced calculator productivity",
      "Documented business rules for easier future maintenance",
    ],
    technologies: ["Tauri", "Rust", "TypeScript"],
  },
  {
    id: "3",
    title: "Nijhuis Rioolreiniging",
    image: null,
    challenge:
      "Nijhuis Rioolreiniging had no streamlined way to manage their container rentals. Availability, rentals, returns, and pickup moments were tracked manually across different places, making it difficult for the team to maintain an accurate overview. Without a central system, mistakes like double-bookings, forgotten pickups, or unclear status updates were common, slowing down operations and reducing clarity between team members.",
    solution: [
      "I built a custom web application that provides a clear, centralized overview of all containers and their statuses. The tool runs in any browser and supports multiple users simultaneously. It tracks which containers are available, rented out, or scheduled for pickup, and includes automated email notifications when a container needs to be collected. The interface focuses on simplicity and speed, eliminating the need for spreadsheets or manual coordination.",
      "In addition, every container has been fitted with a QR code that links directly to its status page in the application. This allows field workers to quickly scan, check and update container information on the go, ensuring real-time accuracy and reducing communication gaps.",
    ],
    benefits: [
      "Clear and centralized container overview",
      "Reduced operational errors and double-bookings",
      "Automated pickup reminders via email",
      "Accessible from any device with multi-user support",
    ],
    technologies: ["Next.js", "Vercel", "Neon DB"],
  },
  {
    id: "4",
    title: "Elan Interim Advies",
    image: null,
    challenge:
      "Elan Interim Advies needed a modern and professional online presence that clearly communicated their services and expertise. Their existing branding wasn't fully translated to the web, and there was no central place for potential clients to learn about their work or get in touch easily. The goal was to build a clean, trustworthy website that feels fast, personal, and well-structured across all devices.",
    solution:
      "I designed and developed a complete website tailored to their brand identity. The site features a clean layout, accessible typography, and a focus on clarity and ease of navigation. I handled the full implementation, from UI design to responsive frontend development and deployment. The final result provides Elan Interim Advies with a professional digital presence that supports their communication and client acquisition.",
    benefits: [
      "Professional and trustworthy online presence",
      "Mobile-first, fast, and fully responsive design",
      "Clear and structured presentation of services",
      "End-to-end delivery: design, development, and hosting",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "5",
    title: "Vosteq",
    image: null,
    challenge:
      "Vosteq's previous website was built on WordPress and suffered from slow loading times, poor performance optimizations, and limited flexibility. The company needed a fast, modern, and scalable site that could support both static pages and a dynamic blog. The design was created by Catapult, but the implementation required tight collaboration to ensure the final result matched the visual direction while dramatically improving speed and maintainability.",
    solution:
      "I rebuilt the entire website using modern web technologies, translating the design provided by Catapult into a performant, responsive, and clean Next.js implementation. The blog is powered by DatoCMS, enabling easy content management while keeping the frontend lightweight. The result is a heavily optimized website, significantly faster than the old WordPress version, with improved caching, rendering, and asset performance.",
    benefits: [
      "Massive performance improvements over the WordPress version",
      "Modern, scalable architecture with clean code structure",
      "Seamless CMS integration using DatoCMS",
      "Pixel-accurate implementation of Catapult's design",
      "Easier content updates and long-term maintainability",
    ],
    technologies: ["Next.js", "DatoCMS", "Vercel"],
  },
  {
    id: "6",
    title: "Voorbij Amsterdam",
    image: null,
    challenge:
      "Voorbij Amsterdam wanted to optimize their production sequence, but the complexity of their workflow made manual experimentation nearly impossible. Many variables influence the production order, and inefficient scheduling leads to delays, idle machines, or unnecessary bottlenecks. Without a structured way to simulate different scenarios, finding the most efficient production strategy was basically guesswork.",
    solution:
      "I developed a custom Python simulation that models Voorbij's production process and evaluates different production orders using an optimization algorithm. The script simulates workflows, timings, and constraints to identify faster, more efficient sequences. This allows the team to compare strategies, analyze outcomes, and make data-driven improvements to the production plan without disrupting real-world operations.",
    benefits: [
      "Insight into optimal production sequencing",
      "Reduced bottlenecks and improved workflow efficiency",
      "Ability to test scenarios safely before implementing changes",
      "Reusable simulation framework for future analyses",
    ],
    technologies: ["Python", "NumPy", "Custom algorithmic optimization"],
  },
  {
    id: "7",
    title: "KiwiConnect",
    image: null,
    challenge:
      "Many companies struggle to efficiently screen resumes, match candidates to job openings, and create a consistent hiring process. Traditional ATS systems are often outdated, rigid, and offer limited insight into candidate potential. KiwiConnect was created to solve this problem from the ground up: a modern, fast, and intelligent platform capable of analyzing resumes, matching them to jobs, and generating insights that help companies make better hiring decisions. As the solo developer, I was responsible for turning a business idea into a fully functioning SaaS product.",
    solution:
      "I built KiwiConnect from scratch, covering everything from the technical architecture to the frontend, backend, database models, vector search, billing, authentication, and AI integrations. The platform includes resume parsing, skill extraction, AI-based scoring, job-specific evaluation, drag-and-drop pairing of resumes and motivation letters, dashboards for companies, precise access control, and a fast-performing UI built with modern tooling. The system is optimized for both small companies and larger teams who need reliable matching without an expensive ATS.",
    benefits: [
      "AI-powered matching for faster candidate screening",
      "End-to-end SaaS platform built for real business workflows",
      "Highly optimized UX, fast load times, and smooth dashboards",
      "Scalable architecture supporting future growth and new features",
      "Modern replacement for traditional ATS systems",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma + PostgreSQL",
      "pgvector similarity search",
      "Railway",
    ],
  },
];

// Render project content with styled cards
const renderProjectContent = (project: (typeof projectsData)[0]) => {
  const solutionArray = Array.isArray(project.solution)
    ? project.solution
    : [project.solution];

  const challengeArray = Array.isArray(project.challenge)
    ? project.challenge
    : [project.challenge];

  return (
    <div className="relative flex flex-col gap-6 border-t border-border pt-8 pl-12">
      {/* META RAIL */}
      <div className="absolute left-0 top-8 flex flex-col items-start gap-1 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
        <span>{String(project.id).padStart(2, "0")}</span>
        <span className="w-6 h-px bg-foreground" />
        {project.year && <span>{project.year}</span>}
      </div>

      {/* Optional image / placeholder */}
      {project.image && (
        <div className="w-full border border-border aspect-video flex items-center justify-center font-baumans text-2xl tracking-wide">
          {project.title}
        </div>
      )}

      {/* Challenge + Solution */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Challenge */}
        <section className="flex flex-col gap-3 md:pr-6">
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase tracking-[0.2em] text-foreground">
              Challenge
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-3">
            {challengeArray.map((para, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase tracking-[0.2em] text-foreground">
              Solution
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-3">
            {solutionArray.map((para, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* Benefits + Technologies */}
      <div className="grid gap-6 md:grid-cols-2 pt-4">
        {/* Benefits */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase tracking-[0.2em] text-foreground">
              Benefits
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <ul className="space-y-1.5">
            {project.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2.5 h-0.5 w-10 bg-foreground shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase tracking-[0.2em] text-foreground">
              Technologies
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="border border-foreground px-2 py-1 text-[11px] uppercase tracking-[0.18em] bg-background"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Generate accordion items from project data
const items = projectsData.map((project) => ({
  id: project.id,
  title: project.title,
  content: renderProjectContent(project),
}));

export default function ProjectAccordion() {
  return (
    <div className="w-full mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="last:border-b"
          >
            <AccordionTrigger
              data-magnetic="true"
              className="transition-all text-left pl-6 md:pl-14 mt-4 overflow-hidden text-foreground/40 duration-200 hover:cursor-pointer hover:text-primary hover:no-underline -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-primary [&>svg]:hidden"
            >
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs font-baumans">{item.id}</p>
                <h1
                  className={`font-baumans uppercase relative text-center text-3xl md:text-5xl`}
                >
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pb-6 pl-6 md:px-20">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
