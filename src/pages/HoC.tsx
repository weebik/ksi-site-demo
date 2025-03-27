import BackgroundImage from "../components/Common/KsiBackgroundImage";
import useDocumentTitle from "../hooks/useDocumentTitle";

function HourOfCode() {
  useDocumentTitle("KSI | " + "Hour of Code");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <BackgroundImage />
    </div>
  );
}

export default HourOfCode;
