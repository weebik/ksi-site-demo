import GallerySection from "../components/Common/GallerySection";
import BackgroundImage from "../components/Common/KsiBackgroundImage";
import HoCAbout from "../components/HoC/HoCAbout";
import HoCEvents from "../components/HoC/HoCEvents";
import HoCHeroSection from "../components/HoC/HoCHeroSection";
import useDocumentTitle from "../hooks/useDocumentTitle";
import images from "../TEMPORARY_DATA/images";

function HourOfCode() {
  useDocumentTitle("KSI | " + "Hour of Code");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <BackgroundImage />
      <HoCHeroSection />
      <HoCAbout />
      <HoCEvents />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}

export default HourOfCode;
