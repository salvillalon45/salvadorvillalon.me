function Intro() {
  return (
    <section className="intro-section">
      <div className="grid gap-4">
        <p>
          <span className="font-bold italic">Hey! How we doing?</span> 👋. I am
          Salvador Villalon, a Software Engineer based in{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Calexico%2C_California"
          >
            Calexico, CA
          </a>
          . I love to code and build meaningful products!
        </p>
        <p>
          Currently working at{" "}
          <a className="underline" href="https://www.beproductable.com/">
            Productable
          </a>{" "}
          as a Full-Stack Engineer, building a management platform to help
          organizations align their priorities and invest time on good project
          ideas. Before that I was at{" "}
          <a className="underline" href="https://www.accenture.com/us-en">
            Accenture
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://www.accenture.com/us-en/industries/accenture-federal-services"
          >
            Accenture Federal Services
          </a>
          , building unique solutions for clients.
        </p>
        <p>
          I grew up in Mexicali, Baja California and Calexico, CA. I have a
          Bachelor of Science in Computer Science from the University of
          California, Irvine{" "}
        </p>
        <p>
          Outside of work, I am out in the wild hiking, at the tennis courts, {' '}
          <a
            href="/run"
            className="underline"
          >
            running in the fields and cities,
          </a>{' '}coding, and writing tech articles.
        </p>

        <div className='grid gap-4'>
          <p>
            Want to learn more about me?
          </p>
          <a
            href="/blog/about-sal"
            aria-label="Learn about my story"
            className="max-w-fit bg-primary text-primary-foreground hover:bg-primary/90 flex items-center rounded-md px-3 py-2 transition-colors"
          >
            Learn about Sal
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
