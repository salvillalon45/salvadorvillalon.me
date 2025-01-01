import Wrapper from "../_components/Wrapper";
import Heading from "~/app/_components/Heading";
import { HeadingSize } from "~/lib/types";
import AboutMeImages from "./AboutMeImages";
import Intro from "./Intro";
import Online from "./Online";
import { Separator } from "../_components/ui/separator";

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
            <Separator />
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
