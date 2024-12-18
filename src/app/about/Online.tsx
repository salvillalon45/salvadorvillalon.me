import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";

function Online() {
  const onlinePresenceLinks = [
    {
      id: "github",
      href: "/follow/github",
      ariaLabel: "Visit my GitHub",
      label: "GitHub",
    },
    {
      id: "linkedin",
      href: "/follow/linkedIn",
      ariaLabel: "Visit my LinkedIn",
      label: "LinkedIn",
    },
    {
      id: "freeCodeCamp",
      href: "/follow/freecodecamp",
      ariaLabel: "Visit my freeCodeCamp",
      label: "freeCodeCamp",
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
          <a
            key={id}
            href={href}
            aria-label={ariaLabel}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center rounded-md px-3 py-2 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Online;
