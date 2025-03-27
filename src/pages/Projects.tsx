import BackgroundImage from "../components/Common/BackgroundImage";
import HeroSection from "../components/Common/HeroSection";
import Project from "../components/Projects/Project";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Projects() {
  useDocumentTitle("KSI | " + "Projects");
  return (
    <div className="min-h-screen bg-no-repeat bg-fixed text-dark-text-primary font-sans bg-cover -mb-0.25">
      <HeroSection header="Projekty" subheader="Czyli to czym się zajmujemy" />
      <BackgroundImage imageUrl="https://wsei.edu.pl/wp-content/uploads/2024/06/jak-zostac-project-managerem-w-it-5-wskazowek-dla-poczatkujacych-1-min.jpg" />
      <Project
        id={1}
        special="start"
        title="Zosia"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non finibus turpis, non fringilla lectus. Donec quis eleifend diam. Nullam tempus dui felis, non facilisis ligula pretium a."
        imageUrl="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        link="/zosia"
      />
      <Project
        id={2}
        title="Hour of Code"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non finibus turpis, non fringilla lectus. Donec quis eleifend diam. Nullam tempus dui felis, non facilisis ligula pretium a."
        imageUrl="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        link="/hoc"
      />
      <Project
        id={3}
        title="Ksiciuś"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non finibus turpis, non fringilla lectus. Donec quis eleifend diam. Nullam tempus dui felis, non facilisis ligula pretium a."
        imageUrl="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        link="/"
      />
      <Project
        id={4}
        special="end"
        title="Pokój studencki"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non finibus turpis, non fringilla lectus. Donec quis eleifend diam. Nullam tempus dui felis, non facilisis ligula pretium a."
        imageUrl="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        link="/"
      />
    </div>
  );
}
export default Projects;
