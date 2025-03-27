import GallerySection from "../components/Common/GallerySection";
import BackgroundImage from "../components/Common/KsiBackgroundImage";
import ZosiaAbout from "../components/ZOSIa/ZosiaAbout";
import ZosiaHeroSection from "../components/ZOSIa/ZosiaHeroSection";
import ZosiaLectures from "../components/ZOSIa/ZosiaLectures";
import useDocumentTitle from "../hooks/useDocumentTitle";
import images from "../TEMPORARY_DATA/images";

function ZOSIa() {
  useDocumentTitle("KSI | " + "ZOSIA");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <BackgroundImage />
      <ZosiaHeroSection />
      <ZosiaAbout />
      <ZosiaLectures />
      <GallerySection images={images.map((image) => image.src)} />
    </div>
  );
}
export default ZOSIa;
