import ImageCard from "./components/AboutMeImages/ImageCard";
import Wrapper from "../_components/Wrapper";
import Intro from "./components/Intro";
import AboutMeImages from "./components/AboutMeImages";
import Online from "./components/Online";

function AboutPage() {
  return (
    <>
      <section className="aboutPageSection my-12">
        <Wrapper>
          <div className="grid gap-12">
            <h1 className="text-3xl font-bold">About Salvador Villalon</h1>

            <Intro />

            <AboutMeImages />

            <Online />
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default AboutPage;
