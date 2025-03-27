import { useEffect, useRef } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import BackgroundImage from "../components/Common/KsiBackgroundImage";
import HeroSection from "../components/Common/HeroSection";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  useDocumentTitle("KSI | " + "Contact");
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.transform = "translateX(-80vw)";
      heroRef.current.style.transition = "transform 1.5s ease-out";
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transform = "translateX(0)";
        }
      }, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <BackgroundImage />
      <HeroSection
        header="Kontakt"
        subheader="Raczej nie chcesz do nas pisać"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
