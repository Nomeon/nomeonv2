import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LogoFrame() {
  return (
      <div className="fixed bottom-0 w-full pointer-events-none">
        <div className="container mx-auto flex justify-between">
          <ul className="w-12 after:content-[''] after:block after:w-px after:h-24 after:bg-secondary/40 flex flex-col items-center gap-4 pointer-events-auto">
            <li>
              <LinkedinIcon className="animate-pulse" />
            </li>
            <li>
              <MailIcon className="animate-pulse" />
            </li>
            <li>
              <GithubIcon className="animate-pulse" />
            </li>
            <li>
              <PhoneIcon className="animate-pulse" />
            </li>
          </ul>
          <div className="w-12 after:content-[''] flex flex-col gap-6  items-center after:block after:w-px after:h-24 after:bg-secondary/40 pointer-events-auto">
            <Link href={"mailto:stijn@nomeon.nl"} className="[writing-mode:vertical-lr]">stijn@nomeon.nl</Link>
          </div>
        </div>
      </div>
  );
}