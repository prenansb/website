import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { ThemeSwitch } from "@/components/theme-switch";
import { experience, profile, projects, socials } from "@/lib/content";

const socialIcons = {
  GitHub: GitHubLogoIcon,
  X: TwitterLogoIcon,
  LinkedIn: LinkedInLogoIcon,
} as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[640px] px-6 py-24 sm:py-32 text-base">
      {/* Hero */}
      <Reveal as="header">
        <h1 className="text-base font-semibold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-[15px] font-medium text-muted">
          {profile.role}
        </p>
      </Reveal>

      <Reveal as="section" delay={0.15} className="mt-8">
        <p className="text-[15px] font-normal leading-7 text-muted">
          {profile.bio.before}
          <a
            href={profile.bio.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {profile.bio.label}
          </a>
          {profile.bio.after}
        </p>
      </Reveal>

      {/* Experience */}
      <Reveal as="section" delay={0.2} className="mt-16">
        <SectionLabel>Experience</SectionLabel>
        <ul className="-mx-3">
          {experience.map((job) => {
            const Wrapper = job.href ? "a" : "div";
            return (
              <li key={job.company}>
                <Wrapper
                  {...(job.href
                    ? {
                        href: job.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group block rounded-lg px-3 py-4 transition-colors duration-300 hover:bg-hover"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-[15px] font-medium text-foreground">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={job.logo}
                        alt=""
                        aria-hidden
                        width={16}
                        height={16}
                        className="size-4 shrink-0 object-contain opacity-70 brightness-0 dark:opacity-80 dark:invert"
                      />
                      {job.company}
                      {job.href && (
                        <ArrowTopRightIcon className="h-2.5 w-2.5 -translate-y-px text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1.5" />
                      )}
                    </span>
                    <span className="shrink-0 font-mono text-xs text-faint">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-faint">{job.role}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {job.description}
                  </p>
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </Reveal>

      {/* Projects */}
      <Reveal as="section" delay={0.2} className="mt-16">
        <SectionLabel>Projects</SectionLabel>
        <ul className="-mx-3 grid gap-2">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-transparent px-3 py-4 transition-colors duration-300 hover:border-line hover:bg-hover"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-[15px] font-medium text-foreground">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.logo}
                      alt=""
                      aria-hidden
                      width={16}
                      height={16}
                      className="size-4 shrink-0 object-contain opacity-70 brightness-0 dark:opacity-80 dark:invert"
                    />
                    {project.name}
                    <ArrowTopRightIcon className="h-2.5 w-2.5 -translate-y-px -translate-x-1 text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-faint">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  {project.blurb}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Connect */}
      <Reveal as="footer" delay={0.2} className="mt-16">
        <SectionLabel>Connect</SectionLabel>
        <p className="text-[15px] leading-7 text-muted">
          Always happy to talk about engineering, design, and building
          products.
          <br />
          Reach me at{" "}
          <CopyEmail
            email={profile.email}
            className="cursor-pointer font-semibold text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {profile.email}
          </CopyEmail>
          .
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex text-muted transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-16 flex items-center justify-between gap-4">
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} {profile.name}.
          </p>
          <ThemeSwitch />
        </div>
      </Reveal>
    </main>
  );
}
