function BackgroundImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="fixed left-30 top-30 w-full h-full flex items-center justify-center -z-10">
      <div
        className="w-full h-full object-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
          backgroundPosition: "center",
          opacity: "0.2",
        }}
      />
    </div>
  );
}

export default BackgroundImage;
