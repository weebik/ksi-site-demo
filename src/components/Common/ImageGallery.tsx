interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`gallery-${index}`}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}

export default ImageGallery;
