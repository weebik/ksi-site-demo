import ImageCarousel from "../Common/ImageCarousel";
import Section from "../Common/TitleSection";

function HoCAbout() {
  return (
    <section
      className="bg-dark-section-secondary z-30 pt-40 pb-40 -mt-30 relative items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" }}
    >
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <Section
          header="Czym jest Hour of Code?"
          subheader="Nie mam pojecia jestem spiacy i pisze to o 4:45(GMT+1). Jesli to czytasz to albo wyslij do mnie pomoc, albo zignoruj moje dywagacje bo naprawde nie wiem co juz obecnie pisze. sample text"
        />
        <ImageCarousel />
      </div>
    </section>
  );
}

export default HoCAbout;
