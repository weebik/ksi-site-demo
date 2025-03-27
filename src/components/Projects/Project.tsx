import TitleSection from "../Common/TitleSection";

interface ProjectProps {
  id: number;
  special?: "start" | "end";
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

function Project({
  id,
  special,
  title,
  description,
  imageUrl,
  link,
}: ProjectProps) {
  const isEven = id % 2 === 0;
  const sectionClass = special
    ? special === "start"
      ? "bg-dark-section-primary pb-50"
      : "bg-dark-section-secondary -mt-30 pb-30"
    : isEven
    ? "bg-dark-section-secondary"
    : "bg-dark-section-primary";

  const clipPath = special
    ? special === "start"
      ? "polygon(0 0, 100% 10%, 100% 100%, 0 100%)"
      : "polygon(0 0%, 100% 10%, 100% 100%, 0 100%)"
    : isEven
    ? "polygon(0 0%, 100% 10%, 100% 90%, 0 100%)"
    : "polygon(0 10%, 100% 0, 100% 100%, 0 90%)";

  return (
    <section
      className={`${sectionClass} z-10 ${
        special ? "pt-40" : "-mt-30 pt-40 pb-50"
      } relative`}
      style={{ clipPath }}
    >
      <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
        {isEven ? (
          <>
            <TitleSection header={title} subheader={description} link={link} />
            <div className="flex flex-col items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-auto h-auto max-h-100 object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-auto h-auto max-h-100 object-cover"
              />
            </div>
            <TitleSection header={title} subheader={description} link={link} />
          </>
        )}
      </div>
    </section>
  );
}

export default Project;
