import ImageCard from "./ImageCard";

function AboutMeImages() {
  return (
    <section className="about-me-images-section">
      <div className="flex flex-wrap justify-center gap-6">
        <ImageCard
          src='/about/hike.jpg'
          alt='salvador hiking'
          footerLabel="Hiking in the wild"
        />

        <ImageCard
          src='/about/run.jpg'
          alt='salvador running'
          footerLabel="Voy Volando"
        />

        <ImageCard
          src='/about/snow.jpg'
          alt='salvador snow'
          footerLabel="Recently tried snowboarding"
        />
      </div>
    </section>
  );
}

export default AboutMeImages;
