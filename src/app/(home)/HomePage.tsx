import { HeadingSize } from "~/lib/types";
import DividerLine from "../_components/DividerLine";
import Wrapper from "../_components/Wrapper";
import Image from "next/image";
import Heading from "../_components/Heading";

function HomePage() {
  return (
    <>
      <section className="home-page-section my-12">
        <Wrapper>
          <div className="flex justify-between gap-8">
            <div>
              <div className="grid gap-4">
                <Heading
                  text="Hey, I&apos;m Salvador Villalon 👨🏽‍💻 👋🏽"
                  size={HeadingSize.H1}
                />

                <DividerLine />

                <p className="sm:max-w-md">
                  I&apos;m a Software Engineer based in Calexico, CA. I{" "}
                  <a
                    className="underline"
                    href="https://www.freecodecamp.org/news/author/salvadorvillalon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    learn
                  </a>
                  ,
                  <a
                    className="underline"
                    href="https://github.com/salvillalon45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    code
                  </a>{" "}
                  and build unique solutions.
                </p>
                <p className="sm:max-w-md">
                  I use Full Stack expertise, optimism, and agile learning to
                  listen to the pain points of users and cooperate with my team
                  to innovate digital experiences. Currently working at {""}
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.beproductable.com/"
                  >
                    Productable
                  </a>
                </p>
              </div>
            </div>

            {/* applies `display: block` when the screen width is 640px or larger (sm breakpoint in Tailwind). */}
            <div className="hidden sm:block">
              <Image
                alt="Salvador Villalon"
                className="rounded-full opacity-100"
                height={176}
                width={176}
                src="/profile.jpg"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default HomePage;
