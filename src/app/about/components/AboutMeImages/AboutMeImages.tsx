import ImageCard from "./ImageCard";

function AboutMeImages() {
  return (
    <section className="aboutMeImagesSection">
      <div className="flex flex-wrap justify-center gap-4">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </section>
  );
}

export default AboutMeImages;
