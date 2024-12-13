import Wrapper from "../../_components/Wrapper";
import Intro from "./components/Intro";
import AboutMeImages from "./components/AboutMeImages";
import Online from "./components/Online";
import DividerLine from "~/app/_components/DividerLine";
import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types/types";

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
