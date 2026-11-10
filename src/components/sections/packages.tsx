import { packages, type Package } from "@/lib/data";
import { getNpmStats, npmUrl } from "@/lib/npm";
import { GithubIcon, NpmIcon } from "@/components/icons";
import { InstallCommand } from "@/components/install-command";
import { SectionHeading } from "@/components/section-heading";
import { Tooltip } from "@/components/tooltip";

const iconLink =
  "-m-1 rounded-md p-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const compact = new Intl.NumberFormat("en", { notation: "compact" });

async function PackageRow({ pkg }: { pkg: Package }) {
  const { version, monthlyDownloads } = await getNpmStats(pkg.name);

  return (
    <div className="group flex items-start justify-between gap-6 border-b border-border py-5">
      <div className="min-w-0">
        <div className="flex items-baseline gap-2.5">
          <a
            href={npmUrl(pkg.name)}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-[0.95rem] font-medium tracking-tight underline-offset-4 hover:underline"
          >
            {pkg.name}
          </a>
          {version ? (
            <span className="font-mono text-[0.6875rem] text-muted-foreground">
              v{version}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {pkg.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <InstallCommand command={`npm i ${pkg.name}`} />
          {monthlyDownloads ? (
            <span className="text-xs text-muted-foreground">
              {compact.format(monthlyDownloads)} downloads / month
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 pt-1 text-muted-foreground">
        {pkg.github ? (
          <Tooltip content="Source">
            <a
              href={pkg.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${pkg.name} source code`}
              className={iconLink}
            >
              <GithubIcon className="size-[1.05rem]" />
            </a>
          </Tooltip>
        ) : null}
        <Tooltip content="npm">
          <a
            href={npmUrl(pkg.name)}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${pkg.name} on npm`}
            className={iconLink}
          >
            <NpmIcon className="size-[0.95rem]" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export function Packages() {
  if (packages.length === 0) return null;

  return (
    <section id="packages" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <SectionHeading
          label="Packages"
          description="Open-source libraries I publish to npm."
        />
        <div className="mt-8 border-t border-border">
          {packages.map((pkg) => (
            <PackageRow key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
