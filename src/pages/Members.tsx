import BackgroundImage from "../components/Common/KsiBackgroundImage";
import HeroSection from "../components/Common/HeroSection";
import AssociationBoard from "../components/Members/AssociationBoard";
import RegularMembers from "../components/Members/RegularMembers";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Members() {
  useDocumentTitle("KSI | " + "Members");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover">
      <BackgroundImage />
      <HeroSection
        header="Członkowie koła"
        subheader="Studenci debile, którzy coś tam robią"
      />
      <AssociationBoard />
      <RegularMembers />
    </div>
  );
}
export default Members;
