import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";
import AnchorLink from "../_components/AnchorLink";

function Online() {
  const onlinePresenceLinks = [
    {
      id: "github",
      // href: "/follow/github",
      href: "",
      ariaLabel: "Visit my GitHub",
      label: "GitHub",
    },
    {
      id: "linkedin",
      // href: "/follow/linkedIn",
      href: "/",
      ariaLabel: "Visit my LinkedIn",
      label: "LinkedIn",
    },
    {
      id: "freeCodeCamp",
      // href: "/follow/freecodecamp",
      href: "/",
      ariaLabel: "Visit my freeCodeCamp",
      label: "freeCodeCamp",
    },
    {
      id: "strava",
      // href: "/follow/strava",
      href: "/",
      ariaLabel: "Visit my Strava",
      label: "Strava",
    }
  ];

  return (
    <section className="online-presence-section grid gap-4">
      <Heading
        text="Find Me Online"
        size={HeadingSize.H2}
      />

      <div className="flex flex-wrap gap-2">
        {onlinePresenceLinks.map(({ id, href, ariaLabel, label }) => (
          <AnchorLink
            key={id}
            href={href}
            text={label}
            aria-label={ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center rounded-md px-3 py-2 transition-colors"
          />
        ))}
      </div>
    </section>
  );
}

export default Online;
