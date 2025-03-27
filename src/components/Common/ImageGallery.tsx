interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`gallery-${index}`}
          className="h-auto max-w-100 object-cover rounded"
        />
      ))}
    </div>
  );
}

export default ImageGallery;
