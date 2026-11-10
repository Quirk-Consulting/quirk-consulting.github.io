import { ArrowRight, Mail } from "lucide-react";
import { quirkUrl } from "@/lib/analytics";

type Props = {
  /** "sidebar": compact card under the navigation. "download": panel inside the download sheet. */
  variant: "sidebar" | "download";
  /** Where the CTA sits, used for utm_content so GA4 shows which placement works. */
  placement: string;
};

const links = [
  {
    path: "/services/atlassian-consulting-services/",
    label: "Atlassian consulting",
    blurb: "Jira and Confluence set up to match how your teams actually work.",
  },
  {
    path: "/services/jira-service-management/",
    label: "Jira Service Management",
    blurb: "Service desks, request types and SLAs built properly the first time.",
  },
  {
    path: "/services/atlassian-data-center-end-of-life/",
    label: "Data Center end of life",
    blurb: "Plan your move to Atlassian Cloud before support ends.",
  },
];

export function QuirkCta({ variant, placement }: Props) {
  if (variant === "sidebar") {
    return (
      <div className="p-3 m-2 text-sm border rounded-lg bg-primary/5 border-primary/20">
        <p className="font-medium text-foreground">Need a hand with Jira?</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Quirk is an Australian Atlassian partner. We set up Jira, JSM and
          Confluence so they reflect your business.
        </p>
        <a
          href={quirkUrl("/services/atlassian-consulting-services/", `${placement}-services`)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-primary hover:underline"
        >
          See how we help <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    );
  }

  return (
    <aside
      className="p-4 mt-6 border rounded-lg bg-muted/40"
      aria-label="Jira help from Quirk"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Icons sorted. Is the rest of your Jira set up right?
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Quirk helps Australian teams get more from Jira, Confluence and Jira
            Service Management.
          </p>
        </div>
        <a
          href={quirkUrl("/contact/", `${placement}-contact`)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Mail className="w-4 h-4" /> Talk to Quirk
        </a>
      </div>
      <ul className="grid gap-3 mt-4 md:grid-cols-3">
        {links.map((l) => (
          <li key={l.path}>
            <a
              href={quirkUrl(l.path, `${placement}-${l.path.split("/").filter(Boolean).pop()}`)}
              target="_blank"
              rel="noopener"
              className="block h-full p-3 text-xs transition-colors border rounded-md bg-background hover:border-primary"
            >
              <span className="flex items-center gap-1 font-medium text-foreground">
                {l.label} <ArrowRight className="w-3 h-3" />
              </span>
              <span className="block mt-1 text-muted-foreground">{l.blurb}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default QuirkCta;
