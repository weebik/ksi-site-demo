import BackgroundImage from "../components/Common/KsiBackgroundImage";
import HeroSection from "../components/Common/HeroSection";
import ContactSection from "../components/Home/ContactSection";
import MembersSection from "../components/Home/MembersSection";
import NewsSection from "../components/Home/NewsSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("KSI | " + "Home");

  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <HeroSection
        header="Koło Studentów Informatyki"
        subheader="Robimy coś z czegoś (czasami)"
      />
      <MembersSection />
      <ProjectsSection />
      <ContactSection />
      <NewsSection />
    </div>
  );
}

export default Home;
