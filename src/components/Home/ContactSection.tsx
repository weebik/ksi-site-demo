import TitleSection from "../Common/TitleSection";

function ContactSection() {
  return (
    <section
      className="bg-dark-section-primary z-30 pt-40 pb-50 -mt-30 relative items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)" }}
    >
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <TitleSection
          header="Skontaktuj się"
          subheader="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          link="/contact"
        />
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          alt="Członkowie"
          className="w-1/3 max-h-96 object-cover"
        />
      </div>
    </section>
  );
}

export default ContactSection;
