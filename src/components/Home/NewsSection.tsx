import Section from "../Common/Section";
import NewsCard from "./NewsCard";

function NewsSection() {
  const news = [
    {
      title: "Title 1",
      description: "Random Description 1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s",
    },
    {
      title: "Title 2",
      description: "Random Description 2",
      imageUrl:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    },
    {
      title: "Title 3",
      description: "Random Description 3",
      path: "/news",
      imageUrl:
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
  ];

  return (
    <section className="bg-transparent z-10 pt-40 pb-50 relative -mt-30 items-center justify-center">
      <div className="container flex flex-col gap-20 mx-auto max-w-350 items-center">
        <Section
          header="Najnowsze nowinki"
          subheader="Zobacz co się dzieje wokół nas."
        />
        <div className="w-full grid grid-cols-3 gap-10">
          {news.map((news) => (
            <NewsCard
              imageUrl={news.imageUrl}
              title={news.title}
              content={news.description}
              path={news.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
