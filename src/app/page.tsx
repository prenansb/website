import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { ThemeSwitch } from "@/components/theme-switch";
import { experience, profile, projects, socials } from "@/lib/content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">
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
        <p className="mt-2 text-base font-medium text-muted">
          {profile.role} · {profile.location}
        </p>
      </Reveal>

      <Reveal as="section" delay={0.15} className="mt-8 space-y-4">
        <p className="text-base font-normal leading-7 text-muted">{profile.bio[0]}</p>
        <p className="text-base font-normal leading-7 text-muted">
          {profile.bioOpen.before}
          <a
            href={profile.bioOpen.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {profile.bioOpen.label}
          </a>
          {profile.bioOpen.after}
        </p>
      </Reveal>

      {/* Work */}
      <Reveal as="section" delay={0.2} className="mt-16">
        <SectionLabel>Work</SectionLabel>
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
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="flex items-center gap-1 text-base font-medium text-foreground">
                      {job.company}
                      {job.href && (
                        <ArrowTopRightIcon className="h-3 w-3 -translate-y-px text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1" />
                      )}
                    </span>
                    <span className="shrink-0 font-mono text-xs text-faint">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-faint">{job.role}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
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
        <SectionLabel>Selected Projects</SectionLabel>
        <ul className="-mx-3 grid gap-2">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-transparent px-3 py-4 transition-colors duration-300 hover:border-line hover:bg-hover"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="flex items-center gap-1 text-base font-medium text-foreground">
                    {project.name}
                    <ArrowTopRightIcon className="h-3 w-3 -translate-y-px -translate-x-1 text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="shrink-0 font-mono text-xs text-faint">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
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
        <p className="text-base leading-7 text-muted">
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
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((social) => (
            <li key={social.label}>
              {social.label === "Email" ? (
                <CopyEmail
                  email={profile.email}
                  className="group inline-flex cursor-pointer items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                  <ArrowTopRightIcon className="h-3 w-3 text-faint transition-colors group-hover:text-foreground" />
                </CopyEmail>
              ) : (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                  <ArrowTopRightIcon className="h-3 w-3 text-faint transition-colors group-hover:text-foreground" />
                </a>
              )}
            </li>
          ))}
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
