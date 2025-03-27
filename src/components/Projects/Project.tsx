import Section from "../Common/Section";

interface ProjectProps {
  variant: "start" | "normal" | "reverse";
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

function Project({
  variant,
  title,
  description,
  imageUrl,
  link,
}: ProjectProps) {
  const sectionClasses = {
    start: "bg-dark-section-primary z-10 pt-40 pb-50 relative",
    normal: "bg-dark-section-primary z-10 -mt-30 pt-40 pb-50 relative",
    reverse: "bg-dark-section-secondary z-20 -mt-30 pt-40 pb-50 relative",
  };

  const clipPaths = {
    start: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
    normal: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
    reverse: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
  };

  return (
    <section
      className={sectionClasses[variant]}
      style={{
        clipPath: clipPaths[variant],
      }}
    >
      {variant === "reverse" ? (
        <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
          <Section header={title} subheader={description} link={link} />
          <div className="flex flex-col items-center justify-center">
            <img
              src={imageUrl}
              alt="project"
              className="w-auto h-auto max-h-100 object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="container flex flex-row gap-20 mx-auto max-w-350 items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={imageUrl}
              alt="project"
              className="w-auto h-auto max-h-100 object-cover"
            />
          </div>
          <Section header={title} subheader={description} link={link} />
        </div>
      )}
    </section>
  );
}

export default Project;
