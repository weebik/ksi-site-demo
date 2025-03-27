function KsiBackgroundImage() {
  return (
    <div className="fixed left-30 top-100 w-full h-full scale-420 flex items-center justify-center -z-10">
      <div
        className="w-96 h-96 bg-white"
        style={{
          backgroundImage: "url('/images/logo_ksi.svg')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "50%",
          opacity: "0.2",
        }}
      />
    </div>
  );
}

export default KsiBackgroundImage;
