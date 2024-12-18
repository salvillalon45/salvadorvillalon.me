import Wrapper from "../_components/Wrapper";
import DividerLine from "~/app/_components/DividerLine";
import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";
import AboutMeImages from "./AboutMeImages";
import Intro from "./Intro";
import Online from "./Online";

function AboutPage() {
  return (
    <section className="about-page-section my-12">
      <Wrapper>
        <div className="grid gap-12">
          <div className='grid gap-4'>
            <Heading
              text="About Salvador Villalon"
              size={HeadingSize.H1}
            />
            <DividerLine />
          </div>

          <Intro />

          <AboutMeImages />

          <Online />
        </div>
      </Wrapper>
    </section>
  );
}

export default AboutPage;
