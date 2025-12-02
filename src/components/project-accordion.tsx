import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "gewoonhout",
    content: (
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Challenge
          </h3>
          <p className="text-muted-foreground">
            Work preparators spent several days manually extracting data from 3D
            IFC models into Excel sheets, as each of the elements had to be
            handled. This was time-consuming and very prone to error.
            Additionally, the same steps had to be repeated for each project,
            further increasing the workload. There was also no time to fully
            integrate BIM processes into the workflow, which could take another
            2+ years before that was feasible.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Solution
          </h3>
          <p className="text-muted-foreground mb-2">
            I've developed an easy-to-use Python tool which loads the IFC
            models, checks the data on completeness and correctness, and
            automatically extracts the required information into CSV files ready
            to be sent to the milling companies. This reduces the manual work
            from days of checking each IFC model to just a few minutes of
            running the tool.
          </p>
          <p className="text-muted-foreground">
            This allowed the company to continue working on a plan to fully
            integrate the pipeline, without having to rush it due to immediate
            project needs. This tool also showcased the potential for further
            automation and optimization in the workflow.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Benefits
            </h3>
            <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
              <li>Significant productivity gains</li>
              <li>Reduced human error</li>
              <li>Optimized workflow</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
              <li>Python</li>
              <li>IfcOpenshell</li>
              <li>PythonOCC-core</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    title: "Koopmans Bouwgroep",
    content: (
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Challenge
          </h3>
          <p className="text-muted-foreground">
            The company struggled with a wildly inefficient workflow:
            calculators had to perform the same calculation twice just to get
            ERP-compatible output. IBIS Trad, the estimating software, provided
            almost no flexibility in how data could be exported, while the ERP
            system expected a very rigid and outdated format. Because the two
            systems couldn’t speak the same language, every project required
            manual rework, duplicated effort, and endless copy-pasting. This not
            only slowed down the calculation team, but also increased the risk
            of inconsistent data and costly mistakes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Solution
          </h3>
          <p className="text-muted-foreground">
            To eliminate the double-work, I built a lightweight desktop
            application using Tauri, combining a Rust backend with a TypeScript
            frontend. The tool ingests IBIS Trad output files, applies all
            required business rules, and transforms the data into the exact
            structure expected by the ERP system. The conversion happens
            automatically within seconds, allowing calculators to perform their
            work once and rely on the tool to generate ERP-ready output. The
            application also centralizes and validates business logic, reducing
            the number of hidden, person-specific workflows.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Benefits
            </h3>
            <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
              <li>Improved accuracy through dynamic output generation</li>
              <li>Enhanced calculator productivity</li>
              <li>Documented business rules for easier future maintenance</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
              <li>Tauri</li>
              <li>Rust</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    title: "Nijhuis Rioolreiniging",
    content: (
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Challenge
          </h3>
          <p className="text-muted-foreground">
            Nijhuis Rioolreiniging had no streamlined way to manage their
            container rentals. Availability, rentals, returns, and pickup
            moments were tracked manually across different places, making it
            difficult for the team to maintain an accurate overview. Without a
            central system, mistakes like double-bookings, forgotten pickups, or
            unclear status updates were common, slowing down operations and
            reducing clarity between team members.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Solution
          </h3>
          <p className="text-muted-foreground mb-2">
            I built a custom web application that provides a clear, centralized
            overview of all containers and their statuses. The tool runs in any
            browser and supports multiple users simultaneously. It tracks which
            containers are available, rented out, or scheduled for pickup, and
            includes automated email notifications when a container needs to be
            collected. The interface focuses on simplicity and speed,
            eliminating the need for spreadsheets or manual coordination.
          </p>
          <p className="text-muted-foreground">
            In addition, every container has been fitted with a QR code that
            links directly to its status page in the application. This allows
            field workers to quickly scan, check and update container information on
            the go, ensuring real-time accuracy and reducing communication gaps.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Benefits
            </h3>
            <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
              <li>Clear and centralized container overview</li>
              <li>Reduced operational errors and double-bookings</li>
              <li>Automated pickup reminders via email</li>
              <li>Accessible from any device with multi-user support</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
              <li>Next.js</li>
              <li>Vercel</li>
              <li>Neon DB</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
  id: "4",
  title: "Elan Interim Advies - Website Design & Development",
  content: (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Challenge
        </h3>
        <p className="text-muted-foreground">
          Elan Interim Advies needed a modern and professional online presence
          that clearly communicated their services and expertise. Their existing
          branding wasn’t fully translated to the web, and there was no central
          place for potential clients to learn about their work or get in touch
          easily. The goal was to build a clean, trustworthy website that feels
          fast, personal, and well-structured across all devices.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Solution
        </h3>
        <p className="text-muted-foreground">
          I designed and developed a complete website tailored to their brand
          identity. The site features a clean layout, accessible typography, and
          a focus on clarity and ease of navigation. I handled the full
          implementation, from UI design to responsive frontend development and
          deployment. The final result provides Elan Interim Advies with a
          professional digital presence that supports their communication and
          client acquisition.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Benefits
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Professional and trustworthy online presence</li>
            <li>Mobile-first, fast, and fully responsive design</li>
            <li>Clear and structured presentation of services</li>
            <li>End-to-end delivery: design, development, and hosting</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Technologies Used
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  ),
},
{
  id: "5",
  title: "Vosteq",
  content: (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Challenge
        </h3>
        <p className="text-muted-foreground">
          Vosteq's previous website was built on WordPress and suffered from slow
          loading times, poor performance optimizations, and limited flexibility.
          The company needed a fast, modern, and scalable site that could support
          both static pages and a dynamic blog. The design was created by
          Catapult, but the implementation required tight collaboration to ensure
          the final result matched the visual direction while dramatically
          improving speed and maintainability.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Solution
        </h3>
        <p className="text-muted-foreground">
          I rebuilt the entire website using modern web technologies, translating
          the design provided by Catapult into a performant, responsive, and clean
          Next.js implementation. The blog is powered by DatoCMS, enabling easy
          content management while keeping the frontend lightweight. The result is
          a heavily optimized website, significantly faster than the old WordPress
          version, with improved caching, rendering, and asset performance.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Benefits
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Massive performance improvements over the WordPress version</li>
            <li>Modern, scalable architecture with clean code structure</li>
            <li>Seamless CMS integration using DatoCMS</li>
            <li>Pixel-accurate implementation of Catapult’s design</li>
            <li>Easier content updates and long-term maintainability</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Technologies Used
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Next.js</li>
            <li>DatoCMS</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  ),
},
{
  id: "6",
  title: "Voorbij Amsterdam",
  content: (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Challenge
        </h3>
        <p className="text-muted-foreground">
          Voorbij Amsterdam wanted to optimize their production sequence, but
          the complexity of their workflow made manual experimentation nearly
          impossible. Many variables influence the production order, and
          inefficient scheduling leads to delays, idle machines, or unnecessary
          bottlenecks. Without a structured way to simulate different scenarios,
          finding the most efficient production strategy was basically guesswork.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Solution
        </h3>
        <p className="text-muted-foreground">
          I developed a custom Python simulation that models Voorbij’s
          production process and evaluates different production orders using an
          optimization algorithm. The script simulates workflows, timings, and
          constraints to identify faster, more efficient sequences. This allows
          the team to compare strategies, analyze outcomes, and make
          data-driven improvements to the production plan without disrupting
          real-world operations.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Benefits
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Insight into optimal production sequencing</li>
            <li>Reduced bottlenecks and improved workflow efficiency</li>
            <li>Ability to test scenarios safely before implementing changes</li>
            <li>Reusable simulation framework for future analyses</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Technologies Used
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Python</li>
            <li>NumPy</li>
            <li>Custom algorithmic optimization</li>
          </ul>
        </div>
      </div>
    </div>
  ),
},
{
  id: "7",
  title: "KiwiConnect",
  content: (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Challenge
        </h3>
        <p className="text-muted-foreground">
          Many companies struggle to efficiently screen resumes, match
          candidates to job openings, and create a consistent hiring process.
          Traditional ATS systems are often outdated, rigid, and offer limited
          insight into candidate potential. KiwiConnect was created to solve
          this problem from the ground up: a modern, fast, and intelligent
          platform capable of analyzing resumes, matching them to jobs, and
          generating insights that help companies make better hiring decisions.
          As the solo developer, I was responsible for turning a business idea
          into a fully functioning SaaS product.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          Solution
        </h3>
        <p className="text-muted-foreground">
          I built KiwiConnect from scratch, covering everything from the
          technical architecture to the frontend, backend, database models,
          vector search, billing, authentication, and AI integrations. The
          platform includes resume parsing, skill extraction, AI-based scoring,
          job-specific evaluation, drag-and-drop pairing of resumes and
          motivation letters, dashboards for companies, precise access control,
          and a fast-performing UI built with modern tooling. The system is
          optimized for both small companies and larger teams who need reliable
          matching without an expensive ATS.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Benefits
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>AI-powered matching for faster candidate screening</li>
            <li>End-to-end SaaS platform built for real business workflows</li>
            <li>Highly optimized UX, fast load times, and smooth dashboards</li>
            <li>Scalable architecture supporting future growth and new features</li>
            <li>Modern replacement for traditional ATS systems</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Technologies Used
          </h3>
          <ul className="list-disc list-inside text-muted-foreground flex flex-col gap-1">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Prisma + PostgreSQL</li>
            <li>pgvector similarity search</li>
            <li>Railway</li>
          </ul>
        </div>
      </div>
    </div>
  ),
}


];

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
