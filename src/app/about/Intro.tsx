import AnchorLink from "../_components/AnchorLink";

function Intro() {
  return (
    <section className="intro-section">
      <div className="grid gap-4">
        <p>
          <span className="font-bold italic">Hey! How we doing?</span> 👋. I am
          Salvador Villalon, a Software Engineer based in{" "}
          <AnchorLink
            href="https://en.wikipedia.org/wiki/Calexico%2C_California"
            text="Calexico, CA"
            target="_blank"
            rel="noopener noreferrer"
          />. I love to code and build meaningful products!
        </p>
        <p>
          Currently working at{" "}
          <AnchorLink
            href="https://www.beproductable.com/"
            text="Productable"
            target="_blank"
            rel="noopener noreferrer"
          />{" "}
          as a Full-Stack Engineer, building a management platform to help
          organizations align their priorities and invest time on good project
          ideas. Before that I was at{" "}
          <AnchorLink
            href="https://www.accenture.com/us-en"
            text="Accenture"
            target="_blank"
            rel="noopener noreferrer"
          />
          {" "}
          and{" "}
          <AnchorLink
            href="https://www.accenture.com/us-en/industries/accenture-federal-services"
            text="Accenture Federal Services"
            target="_blank"
            rel="noopener noreferrer"
          />
          , building unique solutions for clients.
        </p>
        <p>
          I grew up in Mexicali, Baja California and Calexico, CA. I have a
          Bachelor of Science in Computer Science from the University of
          California, Irvine{" "}
        </p>
        <p>
          Outside of work, I am out in the wild hiking, at the tennis courts, {' '}
          <AnchorLink href="/run" text="running in the fields and cities," />{' '}coding, and writing tech articles.
        </p>

        <div className='grid gap-4'>
          <p>
            Want to learn more about me?
          </p>
          <AnchorLink
            href="/blog/about-sal"
            text="Learn about Sal"
            className="max-w-fit bg-primary text-primary-foreground hover:bg-primary/90 flex items-center rounded-md px-3 py-2 transition-colors"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
