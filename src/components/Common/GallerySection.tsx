import ImageGallery from "./ImageGallery";
import TitleSection from "./TitleSection";

function GallerySection({ images }: { images: string[] }) {
  return (
    <section
      className="bg-dark-section-secondary z-30 pt-40 pb-30 -mt-30 relative items-center justify-center"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="container flex flex-col mx-auto max-w-350 items-center">
        <TitleSection header="Galeria" subheader="Zdjęcia z naszych wydarzeń" />
        <div className="mt-10">
          <ImageGallery images={images} />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
