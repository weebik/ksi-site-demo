import Section from "../Common/Section";

function ProjectsSection() {
  return (
    <section
      className="bg-dark-section-secondary z-20 -mt-30 pt-40 pb-50 relative items-center justify-center"
      style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" }}
    >
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        <img
          src="https://cloudinary-marketing-res.cloudinary.com/image/upload/ar_0.5,c_fill,g_auto,w_433/q_auto/f_auto/hiking_dog_mountain.jpg"
          alt="Członkowie"
          className="w-1/3 max-h-96 object-cover"
        />
        <Section
          header="Projekty"
          subheader="Nasze koło zrzesza studentów informatyki, jak i tych, którzy już studia skończyli. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          link="/projects"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
