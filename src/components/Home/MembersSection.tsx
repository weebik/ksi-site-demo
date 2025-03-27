import Section from "../Common/Section";

function MembersSection() {
  return (
    <section
      className="bg-dark-section-primary z-10 pt-40 pb-50 relative items-center justify-center"
      style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <Section
          header="Członkowie"
          subheader="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          link="/members"
        />
        <img
          src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
          alt="Członkowie"
          className="w-1/3 max-h-96 object-cover"
        />
      </div>
    </section>
  );
}

export default MembersSection;
