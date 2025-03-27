import BackgroundImage from "../components/Common/KsiBackgroundImage";
import ZosiaAbout from "../components/ZOSIa/ZosiaAbout";
import ZosiaHeroSection from "../components/ZOSIa/ZosiaHeroSection";
import ZosiaLectures from "../components/ZOSIa/ZosiaLectures";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ZOSIa() {
  useDocumentTitle("KSI | " + "ZOSIA");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <BackgroundImage />
      <ZosiaHeroSection />
      <ZosiaAbout />
      <ZosiaLectures />
      {/* <ZosiaGallery /> */}
    </div>
  );
}
export default ZOSIa;
