import ImageCard from "./ImageCard";

function AboutMeImages() {
  return (
    <section className="aboutMeImagesSection">
      <div className="flex flex-wrap justify-center gap-4">
        <ImageCard 
          src='/about/hike.jpg'
          alt='salvador hiking'
          footerLabel="Into the wild while hiking!"
        />

        <ImageCard 
          src='/about/snow.jpg'
          alt='salvador snow'
          footerLabel="Recently tried snowboarding!"
        />

        <ImageCard 
          src='/about/run.jpg'
          alt='salvador running'
          footerLabel="Voy Volando!"
        />
      </div>
    </section>
  );
}

export default AboutMeImages;
